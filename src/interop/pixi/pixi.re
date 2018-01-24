include Core;

module App {
  let create = create;

  let load_textures = (paths, callback) => {
    load_textures(add_textures(loader, paths), callback);
  };

  let texture = name => get_texture(get_resource(get_resources(loader), name));

  let local_position = (event, container) => {
    let pos = local_position(event_data(event), container);
    { x: pos##x, y: pos##y };
  };

  let point = point;
  let to_local = (display_object, point) => {
    let pos = to_local(display_object, {
      "x": point.x,
      "y": point.y
    });
    { x: pos##x, y: pos##y };
  };
  let add_ticker = (pixi_app, callback) => add_ticker(ticker(pixi_app), callback);
  let remove_ticker = (pixi_app, callback) => remove_ticker(ticker(pixi_app), callback);
  let on = on;
  let app_size = app => {
    let renderer = renderer(app);
    { width: float_of_int(width(renderer)), height: float_of_int(height(renderer)) };
  };
};

module Sprite {
  let sprite = create_sprite;
  let tiling_sprite = tiling_sprite;
  let add_sprite = (app, sprite) => add_sprite(get_stage(app), sprite);
  let remove_sprite = (app, sprite) => remove_sprite(get_stage(app), sprite);
  let append_child_sprite = append_child_sprite;
  let remove_child_sprite = remove_child_sprite;
  let set_size = (sprite, width, height) => {
    set_width(sprite, width);
    set_height(sprite, height);
  };
  let global_position = sprite => {
    let pos = global_position(sprite);
    { x: pos##x, y: pos##y };
  };
  let position = sprite => {
    x: get_x(sprite),
    y: get_y(sprite)
  };
  let get_size = sprite => {
    height: get_height(sprite),
    width: get_width(sprite)
  };
  let interact = sprite => set_interactive(sprite, Js.true_);
  let listen = listen;
  let sprite_texture = sprite_texture;
  let place = (sprite, x: float, y: float) => {
    set_x(sprite, x);
    set_y(sprite, y);
  };

  let parent_container = parent_container;

  let outside = (sprite, container) => {
    let (sprite_position, container_position, sprite_size, container_size) = (
      global_position(sprite),
      global_position(container),
      get_size(sprite),
      get_size(container)
    );

    sprite_position.x < container_position.x ||
      sprite_position.x +. sprite_size.width > container_position.x +. container_size.width ||
      sprite_position.y < container_position.y ||
      sprite_position.y +. sprite_size.height > container_position.y +. container_size.height;
  };
};
