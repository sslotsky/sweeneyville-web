import React from "react";
import { render } from "react-dom";
import Editor from "./designer/Editor";
import { start } from "./src/editor.bs";

const app = start();
document.getElementById("world").appendChild(app.view);

render(<Editor />, document.getElementById("panel"));
