import React, { Component } from "react";
import { tunnel } from "react-apothecary";
import jsonFormat from "json-format";
import {
  OuterContainer,
  TabContainer,
  Tabs,
  Tab,
  TabContent,
  TabTitle
} from "./Tabs";
import Script from "./Script";

const tabs = [
  {
    name: "summary",
    render: bot => (
      <div>
        <pre>{jsonFormat(bot)}</pre>
      </div>
    )
  },
  {
    name: "script",
    render: bot => <Script />
  }
];

export class Editor extends Component {
  state = {
    tab: tabs[0].name
  };

  switchTab = name => () => this.setState({ tab: name });

  render() {
    const { bot, title } = this.props;
    if (!bot) {
      return false;
    }

    const { tab } = this.state;
    return (
      <OuterContainer>
        <TabTitle>{title}</TabTitle>
        <TabContainer>
          <Tabs>
            {tabs.map(t => (
              <Tab
                key={t.name}
                active={t.name === tab}
                onClick={this.switchTab(t.name)}
              >
                <span>{t.name}</span>
              </Tab>
            ))}
          </Tabs>
          <TabContent>{tabs.find(t => t.name === tab).render(bot)}</TabContent>
        </TabContainer>
      </OuterContainer>
    );
  }
}

export default tunnel(state => ({
  bot: state.bots[state.current]
}))(Editor);
