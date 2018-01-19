open Pixi.App;
open Pixi.Sprite;

type event =
  | Some(Pixi.event)
  | None;

type drag_info = {
  position: unit => Pixi.position,
  dragging: unit => bool,
  start: Pixi.event => unit,
  snap: unit => unit
};

let handle_drag = (sprite, on_drop) => {
  let position = position(sprite);
  let event = ref(None);
  let (x, y) = (ref(position.x), ref(position.y));
  let (origin_x, origin_y) = (ref(position.x), ref(position.y));

  let drag_data = {
    position: () => { x: x^, y: y^ },
    dragging: () => event^ != None,
    start: e => {
      event := Some(e);
      let pos = Pixi.Sprite.position(sprite);
      origin_x := pos.x;
      origin_y := pos.y;
    },
    snap: () => {
      x := origin_x^;
      y := origin_y^;
    }
  };

  let finish = () => {
    if (event^ != None) {
      event := None;
      on_drop(drag_data);
    };
  };

  let drag = (event) => {
    let pos = local_position(event, `Container(parent_container(sprite)));
    let size = get_size(sprite);
    x := pos.x -. (size.width /. 2.0);
    y := pos.y -. (size.height /. 2.0);
  };

  listen(sprite, "mouseup", (_) => finish());

  listen(sprite, "mouseupoutside", (_) => finish());

  listen(sprite, "mousemove", (_) => {
    let e = event^;
    switch e {
      | Some(event) => drag(event)
      | _ => ()
    };
  });

  drag_data;
};

let no_op = (_) => ();

let drop_zone = (sprite, container, reject, dropped) => {
  handle_drag(sprite, (drag_data) => {
    if (outside(sprite, container)) {
      reject(drag_data);
    } else {
      dropped(drag_data);
    };
  });
};
