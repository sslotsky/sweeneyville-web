import React from "react";
import { render } from "react-dom";
import { initialize, split } from "apothecary";
import { Bridge } from "react-apothecary";
import Editor from "./designer/Editor";
import { start } from "./src/editor.bs";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/erlang-dark.css";

const store = initialize({
  bots: {}
});

const defaultBot = (type, index) => ({ name: `${type}-${index}` });

const upsert = (type, sprite, index) =>
  split(
    (bot = defaultBot(type, index)) => {
      const { x, y } = sprite;

      return { ...bot, type, x, y };
    },
    "bots",
    index
  );

const editBot = index => split(() => index, "current");

const builder = () => {
  return {
    onDrop: (type, sprite, index) => {
      store.dispatch(upsert(type, sprite, index));
      store.dispatch(editBot(index));
      console.log(store.getState());
    }
  };
};

const app = start(builder());
document.getElementById("world").appendChild(app.view);

const App = () => <Bridge store={store}><Editor /></Bridge>;

render(<App />, document.getElementById("panel"));
