type pixi_app;
type renderer;
type delta;
type ticker;
type container;
type extras;
type tile_constructor;
type texture;
type sprite;
type rect;
type texture_loader;
type resources;
type resource;
type event;
type event_data;
type pixi_position = Js.t({
  .
  x: float,
  y: float
});

type position = {
  x: float,
  y: float
};

type box = {
  left: float,
  right: float,
  top: float,
  bottom: float
};

type size = {
  height: float,
  width: float
};

/* Pixi Application support */
[@bs.new] [@bs.module "pixi.js"] external create: unit => pixi_app = "Application";
[@bs.new] [@bs.module "pixi.js"] external container: unit => container = "Container";
[@bs.new] [@bs.module "pixi.js"] external point: (float, float) => pixi_position = "Point";
[@bs.get] external ticker : (pixi_app) => ticker = "ticker";
[@bs.send] external add_ticker : (ticker, delta => unit) => unit = "add";
[@bs.send] external remove_ticker : (ticker, delta => unit) => unit = "remove";
[@bs.get] external get_stage : (pixi_app) => container = "stage";
[@bs.module "pixi.js"] external loader : texture_loader = "loader";
[@bs.send] external add_textures : (texture_loader, array(string)) => texture_loader = "add";
[@bs.send] external load_textures : (texture_loader, (texture_loader, resources) => unit) => unit = "load";
[@bs.get] external get_texture : (resource) => texture = "texture";
[@bs.get_index] external get_resource : (resources, string) => resource = "";
[@bs.get] external get_resources : texture_loader => resources = "resources";
[@bs.get] external event_data : event => event_data = "data";
[@bs.send] external local_position : (
  event_data,
  [@bs.unwrap][
    | `Sprite(sprite)
    | `Container(container)
  ]
) => pixi_position = "getLocalPosition";
[@bs.send] external to_local : (sprite, pixi_position) => pixi_position = "toLocal";
[@bs.get] external renderer : (pixi_app) => renderer = "renderer";
[@bs.get] external width : (renderer) => int = "width";
[@bs.get] external height : (renderer) => int = "height";

/* Pixi Sprite support */
[@bs.new] [@bs.module "pixi.js"] external create_sprite: texture => sprite = "Sprite";
[@bs.get] external extras : pixi_app => extras = "extras";
[@bs.module "pixi.js"][@bs.scope "extras"] [@bs.new] external tiling_sprite : (texture, int, int) => sprite = "TilingSprite";
[@bs.send] external add_sprite : (container, sprite) => unit = "addChild";
[@bs.send] external remove_sprite : (container, sprite) => unit = "removeChild";
[@bs.send] external remove_child_sprite : (sprite, sprite) => unit = "removeChild";
[@bs.send] external append_child_sprite : (sprite, sprite) => unit = "addChild";
[@bs.set] external set_width : (sprite, float) => unit = "width";
[@bs.set] external set_height : (sprite, float) => unit = "height";
[@bs.get] external get_width : (sprite) => float = "width";
[@bs.get] external get_height : (sprite) => float = "height";
[@bs.send] external global_position : (sprite) => pixi_position = "getGlobalPosition";
[@bs.set] external set_interactive : (sprite, Js.boolean) => unit = "interactive";
[@bs.send] external listen : (sprite, string, event => unit) => unit = "on";
[@bs.send] external on : (container, string, event => unit) => unit = "on";
[@bs.get] external sprite_texture : sprite => texture = "texture";
[@bs.set] external set_x : (sprite, float) => unit = "x";
[@bs.set] external set_y : (sprite, float) => unit = "y";
[@bs.get] external get_x : sprite => float = "x";
[@bs.get] external get_y : sprite => float = "y";
[@bs.get] external parent_container : sprite => container = "parent";
[@bs.send] external box : sprite => rect = "getBounds";
[@bs.send] external local_box : sprite => rect = "getLocalBounds";
[@bs.get] external box_left : rect => float = "left";
[@bs.get] external box_right : rect => float = "right";
[@bs.get] external box_top : rect => float = "top";
[@bs.get] external box_bottom : rect => float = "bottom";

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
  let bounds = sprite => {
    let box = box(sprite);
    {
      left: box_left(box),
      right: box_right(box),
      top: box_top(box),
      bottom: box_bottom(box)
    }
  };

  let local_bounds = sprite => {
    let box = box(sprite);
    {
      left: box_left(box),
      right: box_right(box),
      top: box_top(box),
      bottom: box_bottom(box)
    }
  };

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
