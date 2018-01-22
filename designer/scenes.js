import React, { Component } from "react";
import { Container, Content, MenuLink, Title } from "./menus";
import { fetch } from "../repo";

export default class Scenes extends Component {
  state = {
    scenes: []
  };

  componentDidMount() {
    fetch().then(scenes => this.setState({ scenes }));
  }

  render() {
    return (
      <Container>
        <Title size={3}>Choose world to edit</Title>
        <Content>
          {this.state.scenes.map(scene => (
            <MenuLink size={2} key={scene.id} to={`/scenes/edit/${scene.id}`}>
              {scene.title}
            </MenuLink>
          ))}
        </Content>
      </Container>
    );
  }
}
