import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  font-family: 'neuropol x rg';
  background-color: black;
  color: white;
  text-align: center;
  padding-top: 5rem;
  height: 100vh;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  margin: 0 20%;
  display: flex;
  flex-direction: column;
`;

const fontSize = ({ size = 1 }) => `${size}rem`;

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem;
  font-size: ${fontSize};

  :hover {
    background-color: white;
    color: black;
  }
`;

export const Title = styled.h1`
  font-size: ${fontSize};
`;
