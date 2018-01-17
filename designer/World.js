import React, { Component } from "react";
import { Application } from "pixi.js";

export default class World extends Component {
  constructor(props) {
    super(props);
    this.app = new Application();
  }

  start = node => {
    node.appendChild(this.app.view);
  };

  render() {
    return <div ref={this.start} />;
  }
}
