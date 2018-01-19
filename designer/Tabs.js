import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: darkslategray;
  color: white;
  padding: 1rem;
  height: 100%;
`;

export const Tabs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 20%;
`;

export const Tab = styled.div`
  flex: 1;
  max-height: 5rem;
  min-height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => (props.active ? "orange" : "yellow")};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TabContent = styled.div`
  flex: 1;
`;
