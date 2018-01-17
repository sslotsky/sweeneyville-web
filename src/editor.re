open Pixi.App;
open Pixi.Sprite;

let start = () => {
  let app = create();

  let images = [|
    "images/tiles/tiles.jpeg",
    "images/ninja_girl/Attack__000.png"
  |];

  load_textures(images, (_, _) => {
    let tile = tiling_sprite(texture("images/tiles/tiles.jpeg"), 100, 1000);
    let hero = sprite(texture("images/ninja_girl/Attack__000.png"));
    set_size(hero, 150.0, 150.0);

    add_sprite(app, tile);
    append_child_sprite(tile, hero);

    interact(hero);
    Cloning.make_clone(app, hero);
  });

  app;
}