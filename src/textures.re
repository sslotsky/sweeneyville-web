open Pixi.App;

let loader = () => {
  let loaded = ref(false);

  callback => {
    if (!loaded^) {
      let images = [|
        "/images/tiles/tiles.jpeg",
        "/images/tiles/space.jpg",
        "/images/ninja_girl/Attack__000.png"
      |];

      load_textures(images, (_, _) => {
        callback();
        loaded := true;
      });
    } else {
      callback();
    }
  }
};
