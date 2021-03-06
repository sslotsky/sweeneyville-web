// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry                  = require("bs-platform/lib/js/curry.js");
var V4                     = require("uuid/v4");
var Pixi$Sweeneyville      = require("./interop/pixi/pixi.bs.js");
var Dragging$Sweeneyville  = require("./dragging.bs.js");
var Sequencer$Sweeneyville = require("./sequencer.bs.js");

var seq = Sequencer$Sweeneyville.sequence(/* () */0);

function make_clone(app, mccoy, drop_container, on_drop, on_remove) {
  return Pixi$Sweeneyville.Sprite[/* listen */11](mccoy, "mousedown", (function ($$event) {
                var index = V4();
                var size = Pixi$Sweeneyville.Sprite[/* get_size */9](mccoy);
                var copy = Pixi$Sweeneyville.Sprite[/* sprite */0](Pixi$Sweeneyville.Sprite[/* sprite_texture */12](mccoy));
                Pixi$Sweeneyville.Sprite[/* set_size */6](copy, size[/* width */1], size[/* height */0]);
                var relative_position = Pixi$Sweeneyville.App[/* to_local */5](drop_container, Pixi$Sweeneyville.Sprite[/* global_position */7](mccoy));
                Pixi$Sweeneyville.Sprite[/* place */13](copy, relative_position[/* x */0], relative_position[/* y */1]);
                Pixi$Sweeneyville.Sprite[/* append_child_sprite */4](drop_container, copy);
                Pixi$Sweeneyville.Sprite[/* interact */10](copy);
                var drag_data = Dragging$Sweeneyville.drop_zone(copy, drop_container, (function () {
                        return Pixi$Sweeneyville.Sprite[/* remove_child_sprite */5](drop_container, copy);
                      }), (function () {
                        return Curry._2(on_drop, copy, index);
                      }));
                Curry._1(drag_data[/* start */2], $$event);
                var clone_handler = function () {
                  if (Curry._1(drag_data[/* dragging */1], /* () */0)) {
                    var pos = Curry._1(drag_data[/* position */0], /* () */0);
                    return Pixi$Sweeneyville.Sprite[/* place */13](copy, pos[/* x */0], pos[/* y */1]);
                  } else {
                    Pixi$Sweeneyville.App[/* remove_ticker */7](app, clone_handler);
                    return Dragging$Sweeneyville.track(app, index, copy, drop_container, on_drop, on_remove);
                  }
                };
                return Pixi$Sweeneyville.App[/* add_ticker */6](app, clone_handler);
              }));
}

exports.seq        = seq;
exports.make_clone = make_clone;
/* seq Not a pure module */
