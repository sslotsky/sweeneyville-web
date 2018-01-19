import React, { Component } from "react";
import { split } from "apothecary";
import { tunnel, fromProps } from "react-apothecary";
import CodeEditor from "./CodeEditor";

export function Script({ script = "", updateScript, id }) {
  return (
    <CodeEditor
      value={script}
      onChange={updateScript}
      mode="slangwidge"
      id={id}
    />
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
