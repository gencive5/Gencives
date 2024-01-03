import React from "react";
import ReactDOM from "react-dom";
import { Curtains } from "react-curtains";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
      <App />
    </Curtains>
  </React.StrictMode>,
  rootElement
);
