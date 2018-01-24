import React, { Component } from "react";
import { initialize } from "apothecary";
import { Bridge } from "react-apothecary";
import styled from "styled-components";
import createStore from "./store";
import Editor from "./Editor";
import Scene from "./Scene";
import sceneBuilder from "./builder";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Panel = styled.div`
  flex: 1;
`;

export default class Designer extends Component {
  render() {
    const { store, builder } = sceneBuilder(this.props.scene);

    return (
      <Bridge store={store}>
        <Container>
          <Panel>
            <Scene builder={builder} />
          </Panel>
          <Panel>
            <Editor title={this.props.scene.title} />
          </Panel>
        </Container>
      </Bridge>
    );
  }
}
