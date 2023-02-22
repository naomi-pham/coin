import "./styles.css";
import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementsByClassName("root");

for (let i = 0; i < container.length; i++) {
  console.log(container[i].dataset.coin);
  if (!container[i].classList.contains("root-rendered")) {
    let renderIn = container[i].attachShadow({ mode: "open" });
    container[i].classList.add("root-rendered");
    let coinName = container[i].dataset.coin;

    const root = createRoot(renderIn);
    root.render(<App coinName={coinName} />);
  }
}
