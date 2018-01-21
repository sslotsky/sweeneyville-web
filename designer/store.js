import { initialize, split } from "apothecary";

const defaultBot = (avatar, index) => ({ name: `${avatar}-${index}` });

export const upsert = (avatar, sprite, index) =>
  split(
    (bot = defaultBot(avatar, index)) => {
      const { x, y } = sprite;
      const { script = "", ...rest } = bot;

      return { ...rest, avatar, x, y, script, id: index };
    },
    "bots",
    index
  );

export const editBot = index => split(() => index, "current");

export default function createStore(scene) {
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

  return initialize(initialState);
}
