import "./styles.css";
import React from "react";
import App from "./App";
import { render } from "react-dom";

(function () {
  // const header = document.getElementById("header");
  // const shadowRoot = header.attachShadow({ mode: "open" });
  // shadowRoot.innerHTML = "Hello";
  // console.log("hello");

  const container = document.getElementsByClassName("root");
  for (let i = 0; i < container.length; i++) {
    const renderIn = document.createElement("div");
    container[i].attachShadow({ mode: "open" }).appendChild(renderIn);
    render(<App />, renderIn);
  }
})();
