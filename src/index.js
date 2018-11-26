import React from "react";
import App from "./App";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
