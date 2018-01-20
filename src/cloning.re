open Pixi.App;
open Pixi.Sprite;
open Dragging;
open Sequencer;

let seq = sequence();

let make_clone = (app, mccoy, drop_container, on_drop, on_remove) => {
  listen(mccoy, "mousedown", event => {
    let index = Uuid.uuid();
    let size = get_size(mccoy);
    let copy = sprite(sprite_texture(mccoy));
    set_size(copy, size.width, size.height);

    let relative_position = to_local(drop_container, global_position(mccoy));
    place(copy, relative_position.x, relative_position.y);
    append_child_sprite(drop_container, copy);
    interact(copy);

    let drag_data = drop_zone(
      copy,
      drop_container,
      (_) => remove_child_sprite(drop_container, copy),
      (_) => on_drop(copy, index)
    );

    drag_data.start(event);

    let rec clone_handler = (_) => {
      if (drag_data.dragging()) {
        let pos = drag_data.position();
        place(copy, pos.x, pos.y);
      } else {
        remove_ticker(app, clone_handler);
        track(app, index, copy, drop_container, on_drop, on_remove);
      };
    };

    add_ticker(app, clone_handler);
  });
}
