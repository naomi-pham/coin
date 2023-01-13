import "./styles.css";
import React from "react";
import App from "./App";
import { render } from "react-dom";

(function () {
  // const header = document.getElementById("header");
  // const shadowRoot = header.attachShadow({ mode: "open" });
  // shadowRoot.innerHTML = "Hello";
  // console.log("hello");

  const container = document.getElementById("root");
  const shadow = container.attachShadow({ mode: "open" });
  const renderIn = document.createElement("div");
  shadow.appendChild(renderIn);
  render(<App />, renderIn);
})();
