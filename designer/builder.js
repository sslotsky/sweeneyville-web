import createStore, { upsert, editBot } from "./store";

export default function builder(scene) {
  const store = createStore(scene);

  if (scene.bots.length) {
    scene.bots.forEach(bot => {
      store.dispatch(upsert(bot.avatar, bot, bot.id));
    });

    store.dispatch(editBot(scene.bots[0].id));
  }

  const sceneBuilder = {
    scene,
    onDrop: (avatar, sprite, index) => {
      store.dispatch(upsert(avatar, sprite, index));
      store.dispatch(editBot(index));
      console.log(store.getState());
    }
  };

  return { store, builder: sceneBuilder };
}
