// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry             = require("bs-platform/lib/js/curry.js");
var Pixi$Sweeneyville = require("./interop/pixi.bs.js");

function handle_drag(sprite, on_drop) {
  var position = Pixi$Sweeneyville.Sprite[/* position */8](sprite);
  var $$event = [/* None */0];
  var match_000 = [position[/* x */0]];
  var match_001 = [position[/* y */1]];
  var y = match_001;
  var x = match_000;
  var match_000$1 = [position[/* x */0]];
  var match_001$1 = [position[/* y */1]];
  var origin_y = match_001$1;
  var origin_x = match_000$1;
  var drag_data_000 = function () {
    return /* float array */[
            x[0],
            y[0]
          ];
  };
  var drag_data_001 = function () {
    return +($$event[0] !== /* None */0);
  };
  var drag_data_002 = function (e) {
    $$event[0] = /* Some */[e];
    var pos = Pixi$Sweeneyville.Sprite[/* position */8](sprite);
    origin_x[0] = pos[/* x */0];
    origin_y[0] = pos[/* y */1];
    return /* () */0;
  };
  var drag_data_003 = function () {
    x[0] = origin_x[0];
    y[0] = origin_y[0];
    return /* () */0;
  };
  var drag_data = /* record */[
    drag_data_000,
    drag_data_001,
    drag_data_002,
    drag_data_003
  ];
  var finish = function () {
    if ($$event[0] !== /* None */0) {
      $$event[0] = /* None */0;
      return Curry._1(on_drop, drag_data);
    } else {
      return 0;
    }
  };
  Pixi$Sweeneyville.Sprite[/* listen */11](sprite, "mouseup", (function () {
          return finish(/* () */0);
        }));
  Pixi$Sweeneyville.Sprite[/* listen */11](sprite, "mouseupoutside", (function () {
          return finish(/* () */0);
        }));
  Pixi$Sweeneyville.Sprite[/* listen */11](sprite, "mousemove", (function () {
          var e = $$event[0];
          if (e) {
            var $$event$1 = e[0];
            var pos = Pixi$Sweeneyville.App[/* local_position */3]($$event$1, /* `Container */[
                  -515484383,
                  Pixi$Sweeneyville.Sprite[/* parent_container */14](sprite)
                ]);
            var size = Pixi$Sweeneyville.Sprite[/* get_size */9](sprite);
            x[0] = pos[/* x */0] - size[/* width */1] / 2.0;
            y[0] = pos[/* y */1] - size[/* height */0] / 2.0;
            return /* () */0;
          } else {
            return /* () */0;
          }
        }));
  return drag_data;
}

function no_op() {
  return /* () */0;
}

function drop_zone(sprite, container, reject, dropped) {
  return handle_drag(sprite, (function (drag_data) {
                if (Pixi$Sweeneyville.Sprite[/* outside */17](sprite, container)) {
                  return Curry._1(reject, drag_data);
                } else {
                  return Curry._1(dropped, drag_data);
                }
              }));
}

function track(app, index, bot, drop_container, on_drop, on_remove) {
  var drag_data = drop_zone(bot, drop_container, (function (drag_data) {
          return Curry._1(drag_data[/* snap */3], /* () */0);
        }), (function () {
          return Curry._2(on_drop, bot, index);
        }));
  var render_bot = function () {
    var pos = Curry._1(drag_data[/* position */0], /* () */0);
    return Pixi$Sweeneyville.Sprite[/* place */13](bot, pos[/* x */0], pos[/* y */1]);
  };
  Pixi$Sweeneyville.App[/* add_ticker */6](app, render_bot);
  Pixi$Sweeneyville.Sprite[/* listen */11](bot, "removed", (function () {
          Pixi$Sweeneyville.App[/* remove_ticker */7](app, render_bot);
          return Curry._1(on_remove, index);
        }));
  return Pixi$Sweeneyville.Sprite[/* listen */11](bot, "mousedown", drag_data[/* start */2]);
}

exports.handle_drag = handle_drag;
exports.no_op       = no_op;
exports.drop_zone   = drop_zone;
exports.track       = track;
/* Pixi-Sweeneyville Not a pure module */
