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
