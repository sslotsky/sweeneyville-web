import React, { Component } from "react";
import { withRouter } from "react-router";
import Designer from "./designer";
import { fetch } from "../repo";

export class Edit extends Component {
  state = {
    scene: null
  };

  componentDidMount() {
    fetch().then(scenes =>
      this.setState({
        scene: scenes.find(s => s.id === this.props.id) || { bots: [] }
      })
    );
  }

  render() {
    const { scene } = this.state;

    if (!scene) {
      return false;
    }

    return <Designer scene={scene} />;
  }
}

export default withRouter(({ match }) => <Edit id={match.params.id} />);
