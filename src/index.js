import "./styles.css";
import React from "react";
import App from "./App";
import { render } from "react-dom";

// Shadow Dom under an element with class "root"
debugger;

const container = document.getElementsByClassName("root");
for (let i = 0; i < container.length; i++) {
  let renderIn = container[i].createElement("div");
  container[i].attachShadow({ mode: "open" }).appendChild(renderIn);
  render(<App />, renderIn);
}

// Shadow Dom inside <show-video> web component
customElements.define(
  "show-video",
  class extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: "open" });
      let renderIn = document.createElement("div");
      shadow.appendChild(renderIn);
      render(<App />, renderIn);
    }
  }
);

// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
// connectedCallback: Invoked each time the custom element is appended into a document-connected element.
