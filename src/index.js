import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { render } from "react-dom";
//import React from "react";

import App from "./App";

//render(<App />, document.querySelector("#app"));

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
