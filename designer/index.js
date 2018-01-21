import React, { Component } from "react";
import { render } from "react-dom";
import { initialize, split } from "apothecary";
import { Bridge } from "react-apothecary";
import styled from "styled-components";
import createStore from "./store";
import Editor from "./Editor";
import Scene from "./Scene";
import { fetch } from "../repo";
import sceneBuilder from "./builder";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Panel = styled.div`
  flex: 1;
`;

class App extends Component {
  state = {
    scenes: []
  };

  componentDidMount() {
    fetch().then(scenes => this.setState({ scenes }));
  }

  render() {
    const { scenes } = this.state;

    if (!scenes.length) {
      return false;
    }

    const { store, builder } = sceneBuilder(scenes[0]);

    return (
      <Bridge store={store}>
        <Container>
          <Panel>
            <Scene builder={builder} />
          </Panel>
          <Panel>
            <Editor />
          </Panel>
        </Container>
      </Bridge>
    );
  }
}

render(<App />, document.getElementById("app"));
