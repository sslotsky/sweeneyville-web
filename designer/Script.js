import React, { Component } from "react";
import CodeMirror from "codemirror";
import "./mode";

export default class extends Component {
  initialize = node => {
    this.codeMirror = CodeMirror.fromTextArea(node, {
      theme: "erlang-dark",
      mode: "slangwidge"
    });
  };

  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <textarea ref={this.initialize} rows={10} />
      </div>
    );
  }
}
