import React from "react";
import { render } from "react-dom";
import { initialize, split } from "apothecary";
import { Bridge } from "react-apothecary";
import Editor from "./designer/Editor";
import { start } from "./src/editor.bs";
import uuidv4 from "uuid/v4";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/erlang-dark.css";

const defaultBot = (avatar, index) => ({ name: `${avatar}-${index}` });

const upsert = (avatar, sprite, index) =>
  split(
    (bot = defaultBot(avatar, index)) => {
      const { x, y } = sprite;
      const { script = "", ...rest } = bot;

      return { ...rest, avatar, x, y, script, id: index };
    },
    "bots",
    index
  );

const editBot = index => split(() => index, "current");

const script = `
walk up
shoot right
`;

const scene = {
  bots: [
    {
      id: uuidv4(),
      avatar: "ninja",
      name: "ninja-0",
      x: 100,
      y: 150,
      script
    }
  ]
};

const initialState = {
  bots: scene.bots.reduce(
    (cache, bot) => ({
      ...cache,
      [bot.id]: bot
    }),
    {}
  ),
  current: 0
};

const store = initialize(initialState);

const builder = (scene = { bots: [] }) => {
  if (scene.bots.length) {
    scene.bots.forEach(bot => {
      store.dispatch(upsert(bot.avatar, bot, bot.id));
    });

    store.dispatch(editBot(scene.bots[0].id));
  }

  return {
    scene,
    onDrop: (avatar, sprite, index) => {
      store.dispatch(upsert(avatar, sprite, index));
      store.dispatch(editBot(index));
      console.log(store.getState());
    }
  };
};

const app = start(builder(scene));
document.getElementById("world").appendChild(app.view);

const App = () => <Bridge store={store}><Editor /></Bridge>;

render(<App />, document.getElementById("panel"));
