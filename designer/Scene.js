import React, { Component } from "react";
import { start } from "../src/editor.bs";

export default class Scene extends Component {
  save = node => {
    this.viewPort = node;
  };

  componentDidMount() {
    const app = start(this.props.builder);
    this.viewPort.appendChild(app.view);
  }

  render() {
    return <div ref={this.save} />;
  }
}
