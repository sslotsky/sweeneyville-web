import React from "react";
import { render } from "react-dom";
import Editor from "./designer/Editor";

function App() {
  return <Editor />;
}

render(<App />, document.getElementById("root"));
console.log("Hello");
