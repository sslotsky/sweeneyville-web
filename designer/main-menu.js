import React from "react";
import { Container, Content, MenuLink, Title } from "./menus";

export default function MainMenu() {
  return (
    <Container>
      <Title size={5}>Welcome To Sweenyville</Title>
      <Content>
        <MenuLink size={3} to="/scenes/new">Create New World</MenuLink>
        <MenuLink size={3} to="/scenes">Edit World</MenuLink>
      </Content>
    </Container>
  );
}
