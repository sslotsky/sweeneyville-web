type builder;
[@bs.send] external drop: (builder, string, Pixi.sprite, int) => unit = "onDrop";
[@bs.send] external remove : (builder, int) => unit = "remove";

let dropped = (builder, string) => drop(builder, string);
let removed = builder => remove(builder);
