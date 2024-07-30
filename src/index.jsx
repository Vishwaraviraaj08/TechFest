import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

function playSound() {
  const audio = new Audio("../../assets/backgroundMusic.mp3");
  audio.play().then(r => console.log(r));
}

ReactDOM.render(
  <BrowserRouter>
      {setTimeout(playSound, 1000)}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
