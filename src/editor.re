open Pixi.App;
open Pixi.Sprite;
open Builder;

let start = (config) => {
  let app = create();

  let images = [|
    "images/tiles/tiles.jpeg",
    "images/tiles/space.jpg",
    "images/ninja_girl/Attack__000.png"
  |];

  load_textures(images, (_, _) => {
    let app_size = app_size(app);
    let tile = tiling_sprite(texture("images/tiles/tiles.jpeg"), 100, int_of_float(app_size.height));
    let space = tiling_sprite(texture("images/tiles/space.jpg"), int_of_float(app_size.width), int_of_float(app_size.height));
    let hero = sprite(texture("images/ninja_girl/Attack__000.png"));
    set_size(hero, 150.0, 150.0);

    add_sprite(app, tile);
    add_sprite(app, space);
    place(space, 100.0, 0.0);
    append_child_sprite(tile, hero);

    interact(hero);
    Cloning.make_clone(app, hero, space, dropped(config));
  });

  app;
}
