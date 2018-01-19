type builder;
[@bs.send] external dropped : (builder, Pixi.sprite, int) => unit = "onDrop";

let dropped = builder => dropped(builder);
