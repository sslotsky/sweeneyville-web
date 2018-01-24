import React, { Component } from "react";
import { start } from "../src/editor.bs";

export default class Scene extends Component {
  save = node => {
    this.viewPort = node;
  };

  constructor(props) {
    super(props);
    this.app = start(this.props.builder);
  }

  resize = () => {
    const rect = this.viewPort.getBoundingClientRect();
    this.app.renderer.resize(rect.width, window.innerHeight);
  };

  componentDidMount() {
    this.viewPort.appendChild(this.app.view);
    this.resize();

    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    this.app.destroy();
  }

  render() {
    return <div ref={this.save} />;
  }
}
