open Pixi.App;
open Pixi.Sprite;

type drag_info = {
  position: unit => Pixi.position
};

let handle_drag = (sprite, event) => {
  let dragging = ref(true);
  let x = ref(global_position(sprite).x);
  let y = ref(global_position(sprite).y);

  listen(sprite, "mouseupoutside", (_) => {
    dragging := false;
  });

  listen(sprite, "mousemove", (_) => {
    if (dragging^) {
      let pos = local_position(event, parent_container(sprite));
      let size = get_size(sprite);
      x := pos.x -. (size.width /. 2.0);
      y := pos.y -. (size.height /. 2.0);
      Js.log(x);
      Js.log(y);
    }
  });

  { position: () => { x: x^, y: y^ } };
};

let make_clone = (app, mccoy) => {
  listen(mccoy, "mousedown", event => {
    let size = get_size(mccoy);
    let copy = sprite(sprite_texture(mccoy));
    set_size(copy, size.width, size.height);
    add_sprite(app, copy);
    let drag_data = handle_drag(mccoy, event);

    add_ticker(app, (_) => {
      let pos = drag_data.position();
      place(copy, pos.x, pos.y);
    });
    /*
     *let pos = global_position(mccoy);
     *place(clone, pos.x +. 100.0, pos.y);
     */
  });
}
