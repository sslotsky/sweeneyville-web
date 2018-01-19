import React from "react";
import { render } from "react-dom";
import Editor from "./designer/Editor";
import { start } from "./src/editor.bs";

const builder = {
  onDrop: (sprite, index) => {}
};

const app = start(builder);
document.getElementById("world").appendChild(app.view);

render(<Editor />, document.getElementById("panel"));
