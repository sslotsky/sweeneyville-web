import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: darkslategray;
  color: white;
  height: 100%;
  font-family: "neuropol x rg";
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabTitle = styled.h2`
  text-align: center;
`;

export const Tabs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 20%;
`;

export const Tab = styled.div`
  flex: 1;
  max-height: 2.5rem;
  min-height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => (props.active ? "orange" : "yellow")};
  cursor: pointer;
  padding-left: 3rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const TabContent = styled.div`
  flex: 1;
`;
