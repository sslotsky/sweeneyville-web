open Pixi.App;
open Pixi.Sprite;
open Builder;
open Textures;

let load = loader();

let start = (builder) => {
  let app = create();

  load(() => {
    let initial_size = app_size(app);
    let tile = tiling_sprite(texture("/images/tiles/tiles.jpeg"), 100, int_of_float(initial_size.height));
    let space = tiling_sprite(texture("/images/tiles/space.jpg"), int_of_float(initial_size.width), int_of_float(initial_size.height));

    Dom.listen("resize", (_) => {
      let resized = app_size(app);
      set_size(tile, 100.0, resized.height);
      set_size(space, resized.width, resized.height);
    });

    let hero = sprite(texture("/images/ninja_girl/Attack__000.png"));

    let bots = Array.map(bot => {
      let s = sprite(texture("/images/ninja_girl/Attack__000.png"));
      set_size(s, 150.0, 150.0);
      append_child_sprite(space, s);
      place(s, bot##x, bot##y);

      interact(s);
      Dragging.track(app, bot##id, s, space, dropped(builder, "ninja"), removed(builder));

      s;
    }, Builder.bots(builder));

    set_size(hero, 150.0, 150.0);

    add_sprite(app, tile);
    add_sprite(app, space);
    place(space, 100.0, 0.0);
    append_child_sprite(tile, hero);

    interact(hero);
    Cloning.make_clone(app, hero, space, dropped(builder, "ninja"), removed(builder));
  });

  app;
}
