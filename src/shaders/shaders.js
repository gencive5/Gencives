export const flowmapVs = `
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    // default mandatory variables
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    // custom variables
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    void main() {

        vec3 vertexPosition = aVertexPosition;

        gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

        // varyings
        vTextureCoord = aTextureCoord;
        vVertexPosition = vertexPosition;
    }
`;

export const flowmapFs = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec3 vVertexPosition;
varying vec2 vTextureCoord;

uniform sampler2D uFlowMap;

uniform vec2 uMousePosition;
uniform float uFalloff;
uniform float uAlpha;
uniform float uDissipation;
uniform float uDistortionSpeed;

uniform vec2 uVelocity;
uniform float uAspect;

void main() {
    vec2 textCoords = vTextureCoord;    

    vec4 color = texture2D(uFlowMap, textCoords) * uDissipation;
    //vec4 color = vec4(0.0, 0.0, 0.0, 1.0) * uDissipation;

    vec2 mouseTexPos = (uMousePosition + 1.0) * 0.5;
    vec2 cursor = vTextureCoord - mouseTexPos;
    cursor.x *= uAspect;

    vec2 velocityMultiplier = vec2(uDistortionSpeed, -1.0 * uDistortionSpeed);

    vec3 stamp = vec3(uVelocity * velocityMultiplier, 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
    float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;
    color.rgb = mix(color.rgb, stamp, vec3(falloff));

    gl_FragColor = color;
}
`;

// displacement shaders
export const displacementVs = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

// default mandatory variables
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

// custom variables
varying vec3 vVertexPosition;
varying vec2 vTextureCoord;

void main() {

    gl_Position = vec4(aVertexPosition, 1.0);
  // set the varyings
  vTextureCoord = aTextureCoord;
  vVertexPosition = aVertexPosition;
}
`;

export const displacementFs = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

// get our varyings
varying vec3 vVertexPosition;
varying vec2 vTextureCoord;
// our render texture
uniform sampler2D uRenderTexture;
uniform sampler2D uFlowTexture;

// custom uniforms
uniform float uRed;
uniform float uGreen;
uniform float uBlue;

void main() {
    // our flowmap
    vec4 flowTexture = texture2D(uFlowTexture, vTextureCoord);

    // distort our image texture based on the flowmap values
    vec2 distortedCoords = vTextureCoord;
    distortedCoords -= flowTexture.xy * 0.1;

    // get our final texture based on the displaced coords
    vec4 texture = texture2D(uRenderTexture, distortedCoords);
    
    // vec4 rTexture = texture2D(uRenderTexture, distortedCoords + flowTexture.xy * 0.0125);
    // vec4 gTexture = texture2D(uRenderTexture, distortedCoords);
    // vec4 bTexture = texture2D(uRenderTexture, distortedCoords - flowTexture.xy * 0.0125);
    vec4 rTexture = texture2D(uRenderTexture, distortedCoords + flowTexture.xy * uRed);
    vec4 gTexture = texture2D(uRenderTexture, distortedCoords + flowTexture.xy * uGreen);
    vec4 bTexture = texture2D(uRenderTexture, distortedCoords - flowTexture.xy * uBlue);

    // mix the BW image and the colored one based on our flowmap color values
    float mixValue = clamp((abs(flowTexture.r) + abs(flowTexture.g) + abs(flowTexture.b)) * 1.5, 0.0, 1.0);
    // texture = mix(texture, vec4(rTexture.r, gTexture.g, bTexture.b, texture.a), mixValue);
    texture = mix(texture, vec4(rTexture.r, gTexture.g, bTexture.b, texture.a), mixValue);

    gl_FragColor = texture;
}
`;
