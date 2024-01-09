import React, { useRef, useState, useEffect } from "react";
import { PingPongPlane, Plane, useCurtainsEvent } from "react-curtains";
import {
  flowmapVs,
  flowmapFs,
  displacementVs,
  displacementFs
} from "../shaders/shaders";
import { Vec2 } from "curtainsjs";
import * as dat from "lil-gui";

import "./indexx.css";

function Flowmap() {
  const mouse = useRef(new Vec2());
  const lastMouse = useRef(new Vec2());
  const velocity = useRef(new Vec2());
  const updateVelocity = useRef(false);

  // mouse move
  useEffect(() => {
    const onMouseMove = (e) => {
      // velocity is our mouse position minus our mouse last position
      lastMouse.current.copy(mouse.current);

      // touch event
      if (e.targetTouches) {
        mouse.current.set(
          e.targetTouches[0].clientX,
          e.targetTouches[0].clientY
        );
      }
      // mouse event
      else {
        mouse.current.set(e.clientX, e.clientY);
      }

      // divided by a frame duration (roughly)
      velocity.current.set(
        (mouse.current.x - lastMouse.current.x) / 16,
        (mouse.current.y - lastMouse.current.y) / 16
      );

      // we should update the velocity
      updateVelocity.current = true;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onMouseMove, {
      passive: true
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onMouseMove, {
        passive: true
      });
    };
  }, []);

  // FLOWMAP
  const [flowmap, setFlowmap] = useState();

  const setPingPongSizes = (plane) => {
    const planeBBox = plane.getBoundingRect();
    plane.uniforms.fallOff.value =
      planeBBox.width > planeBBox.height
        ? planeBBox.width / 30000
        : planeBBox.height / 20000;
    plane.uniforms.aspect.value = planeBBox.width / planeBBox.height;
  };

  const onPingPongReady = (plane) => {
    setFlowmap(plane);
    setPingPongSizes(plane);
  };

  useCurtainsEvent(
    "onRender",
    (curtains) => {
      if (flowmap) {
        // update mouse position
        flowmap.uniforms.mousePosition.value = flowmap.mouseToPlaneCoords(
          mouse.current
        );

        // update velocity
        if (!updateVelocity.current) {
          velocity.current.set(
            curtains.lerp(velocity.current.x, 0, 0.5),
            curtains.lerp(velocity.current.y, 0, 0.5)
          );
        }
        updateVelocity.current = false;

        flowmap.uniforms.velocity.value = new Vec2(
          curtains.lerp(velocity.current.x, 0, 0.1),
          curtains.lerp(velocity.current.y, 0, 0.1)
        );
      }
    },
    [flowmap]
  );

  const flowmapUniforms = {
    mousePosition: {
      name: "uMousePosition",
      type: "2f",
      value: new Vec2()
    },
    // size of the cursor
    fallOff: {
      name: "uFalloff",
      type: "1f",
      value: 0.06
    },
    // how much the cursor should grow with time
    cursorGrow: {
      name: "uCursorGrow",
      type: "1f",
      value: 1.02
    },
    // alpha of the cursor
    alpha: {
      name: "uAlpha",
      type: "1f",
      value: 1
    },
    // how much the cursor must dissipate over time (ie trail length)
    // closer to 1 = no dissipation
    dissipation: {
      name: "uDissipation",
      type: "1f",
      value: 0.977
    },
    // our velocity
    velocity: {
      name: "uVelocity",
      type: "2f",
      value: new Vec2()
    },
    // window aspect ratio to draw a circle
    aspect: {
      name: "uAspect",
      type: "1f",
      value: 0
    },
    distortionSpeed: {
      name: "uDistortionSpeed",
      type: "1f",
      value: 1.41
    }
  };

  const planeUniforms = {
    red: {
      name: "uRed",
      type: "1f",
      value: 0.0125
    },
    green: {
      name: "uGreen",
      type: "1f",
      value: 0.025
    },
    blue: {
      name: "uBlue",
      type: "1f",
      value: 0.0125
    }
  };

  // Render plane
  const [renderPlane, setRenderPlane] = useState();

  const onReady = (plane) => {
    setRenderPlane(plane);
    plane.playVideos();
  };

  // everything is ready
  useEffect(() => {
    if (flowmap && renderPlane) {
      // create a texture that will hold our flowmap
      renderPlane.createTexture({
        sampler: "uFlowTexture",
        fromTexture: flowmap.getTexture() // set it based on our PingPongPlane flowmap plane's texture
      });
    }
  }, [flowmap, renderPlane]);

  // Debug
  const gui = new dat.GUI({ width: 340 });

  gui
    .add(flowmapUniforms.fallOff, "value")
    .min(0.0)
    .max(0.25)
    .step(0.01)
    .name("Cursor Size")
    .onChange(() => {
      flowmap.uniforms.fallOff.value = flowmapUniforms.fallOff.value;
    });

  gui
    .add(flowmapUniforms.dissipation, "value")
    .min(0.9)
    .max(1.0)
    .step(0.001)
    .name("Dissipation")
    .onChange(() => {
      flowmap.uniforms.dissipation.value = flowmapUniforms.dissipation.value;
    });

  gui
    .add(flowmapUniforms.alpha, "value")
    .min(0)
    .max(1)
    .step(0.01)
    .name("Alpha")
    .onChange(() => {
      flowmap.uniforms.alpha.value = flowmapUniforms.alpha.value;
    });

  gui
    .add(flowmapUniforms.distortionSpeed, "value")
    .min(0)
    .max(2)
    .step(0.01)
    .name("Distortion")
    .onChange(() => {
      flowmap.uniforms.distortionSpeed.value =
        flowmapUniforms.distortionSpeed.value;
    });

  gui
    .add(planeUniforms.red, "value")
    .min(0)
    .max(0.05)
    .step(0.001)
    .name("Red")
    .onChange(() => {
      renderPlane.uniforms.red.value = planeUniforms.red.value;
    });

  gui
    .add(planeUniforms.green, "value")
    .min(0)
    .max(0.05)
    .step(0.001)
    .name("Green")
    .onChange(() => {
      renderPlane.uniforms.green.value = planeUniforms.green.value;
    });

  gui
    .add(planeUniforms.blue, "value")
    .min(0)
    .max(0.05)
    .step(0.001)
    .name("Blue")
    .onChange(() => {
      renderPlane.uniforms.blue.value = planeUniforms.blue.value;
    });

  return (
    <div className="Flowmap">
      <PingPongPlane
        className="Flowmap-ping-pong-plane"
        sampler="uFlowMap"
        // plane init parameters
        vertexShader={flowmapVs}
        fragmentShader={flowmapFs}
        uniforms={flowmapUniforms}
        texturesOptions={{ floatingPoint: "half-float" }}
        // plane events
        onReady={onPingPongReady}
        onAfterResize={setPingPongSizes}
      />

      <Plane
        className="Flowmap-render-plane"
        // plane init parameters
        vertexShader={displacementVs}
        fragmentShader={displacementFs}
        uniforms={planeUniforms}
        depth={false}
        // plane events
        onReady={onReady}
      >
        <img
          src="/images/test.png"
          data-sampler="uRenderTexture"
          alt=""
        />
        {/* <video
          src="/images/background.mp4"
          data-sampler="uRenderTexture"
          alt=""
        /> */}
      </Plane>
    </div>
  );
}

export default Flowmap;
