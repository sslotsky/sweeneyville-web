import React, { Component } from "react";
import CodeMirror from "codemirror";
import "./mode";

export default class extends Component {
  initialize = node => {
    this.editor = node;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.codeMirror.setValue(nextProps.value);
    }
  }

  componentDidMount() {
    this.codeMirror = CodeMirror.fromTextArea(this.editor, {
      theme: "erlang-dark",
      mode: this.props.mode
    });

    this.codeMirror.on("change", (doc, change) => {
      if (change.origin !== "setValue") {
        this.props.onChange(doc.getValue());
      }
    });
  }

  componentWillUnmount() {
    this.codeMirror.toTextArea();
  }

  render() {
    return (
      <div>
        <textarea
          ref={this.initialize}
          rows={10}
          defaultValue={this.props.value}
        />
      </div>
    );
  }
}
