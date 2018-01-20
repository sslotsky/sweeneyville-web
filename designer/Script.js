import React, { Component } from "react";
import { split } from "apothecary";
import { tunnel, fromProps } from "react-apothecary";
import CodeEditor from "./CodeEditor";
import { validate } from "../src/interop/parser.bs";

export function Script({ script = "", updateScript, id }) {
  return (
    <div>
      <CodeEditor
        value={script}
        onChange={updateScript}
        mode="slangwidge"
        id={id}
      />
      {validate(script) ? "✓ all good" : "✘ needs work"}
    </div>
  );
}

const update = index => text => split(() => text, "bots", index, "script");

export default tunnel(
  state => ({
    script: state.bots[state.current].script,
    id: state.bots[state.current].name
  }),
  fromProps((props, _, state) => ({
    updateScript: update(state.current)
  }))
)(Script);
