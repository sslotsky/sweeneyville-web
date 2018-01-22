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

  componentDidMount() {
    this.viewPort.appendChild(this.app.view);
  }

  componentWillUnmount() {
    this.app.destroy();
  }

  render() {
    return <div ref={this.save} />;
  }
}
