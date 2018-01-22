import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/erlang-dark.css";
import MainMenu from "./designer/main-menu";
import Scenes from "./designer/scenes";
import New from "./designer/new";
import Edit from "./designer/edit";
import "./application.css";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainMenu} />
      <Route exact path="/scenes" component={Scenes} />
      <Route exact path="/scenes/new" component={New} />
      <Route exact path="/scenes/edit/:id" component={Edit} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById("app"));
