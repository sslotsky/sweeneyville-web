type builder;

type bot = Js.t({
  .
  id: string,
  script: string,
  name: string,
  avatar: string,
  x: float,
  y: float
});

type scene = Js.t({
  .
  bots: array(bot)
});

type avatar =
  | Ninja;

[@bs.send] external drop: (builder, string, Pixi.sprite, string) => unit = "onDrop";
[@bs.send] external remove : (builder, string) => unit = "remove";
[@bs.get] external scene : builder => scene = "scene";

let dropped = (builder, string) => drop(builder, string);
let removed = builder => remove(builder);
let bots = builder => scene(builder)##bots;

let to_avatar = avatar_string => switch avatar_string {
  | "ninja" => Some(Ninja)
  | _ => None
};
