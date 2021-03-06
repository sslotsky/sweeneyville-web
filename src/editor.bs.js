// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array               = require("bs-platform/lib/js/array.js");
var Pixi$Sweeneyville     = require("./interop/pixi/pixi.bs.js");
var Builder$Sweeneyville  = require("./interop/builder.bs.js");
var Cloning$Sweeneyville  = require("./cloning.bs.js");
var Dragging$Sweeneyville = require("./dragging.bs.js");
var Textures$Sweeneyville = require("./textures.bs.js");

var load = Textures$Sweeneyville.loader(/* () */0);

function start(builder) {
  var app = Pixi$Sweeneyville.App[/* create */0](/* () */0);
  load((function () {
          var initial_size = Pixi$Sweeneyville.App[/* app_size */9](app);
          var tile = Pixi$Sweeneyville.Sprite[/* tiling_sprite */1](Pixi$Sweeneyville.App[/* texture */2]("/images/tiles/tiles.jpeg"), 100, initial_size[/* height */0] | 0);
          var space = Pixi$Sweeneyville.Sprite[/* tiling_sprite */1](Pixi$Sweeneyville.App[/* texture */2]("/images/tiles/space.jpg"), initial_size[/* width */1] | 0, initial_size[/* height */0] | 0);
          window.addEventListener("resize", (function () {
                  var resized = Pixi$Sweeneyville.App[/* app_size */9](app);
                  Pixi$Sweeneyville.Sprite[/* set_size */6](tile, 100.0, resized[/* height */0]);
                  return Pixi$Sweeneyville.Sprite[/* set_size */6](space, resized[/* width */1], resized[/* height */0]);
                }));
          var hero = Pixi$Sweeneyville.Sprite[/* sprite */0](Pixi$Sweeneyville.App[/* texture */2]("/images/ninja_girl/Attack__000.png"));
          $$Array.map((function (bot) {
                  var s = Pixi$Sweeneyville.Sprite[/* sprite */0](Pixi$Sweeneyville.App[/* texture */2]("/images/ninja_girl/Attack__000.png"));
                  Pixi$Sweeneyville.Sprite[/* set_size */6](s, 150.0, 150.0);
                  Pixi$Sweeneyville.Sprite[/* append_child_sprite */4](space, s);
                  Pixi$Sweeneyville.Sprite[/* place */13](s, bot.x, bot.y);
                  Pixi$Sweeneyville.Sprite[/* interact */10](s);
                  Dragging$Sweeneyville.track(app, bot.id, s, space, Builder$Sweeneyville.dropped(builder, "ninja"), Builder$Sweeneyville.removed(builder));
                  return s;
                }), Builder$Sweeneyville.bots(builder));
          Pixi$Sweeneyville.Sprite[/* set_size */6](hero, 150.0, 150.0);
          Pixi$Sweeneyville.Sprite[/* add_sprite */2](app, tile);
          Pixi$Sweeneyville.Sprite[/* add_sprite */2](app, space);
          Pixi$Sweeneyville.Sprite[/* place */13](space, 100.0, 0.0);
          Pixi$Sweeneyville.Sprite[/* append_child_sprite */4](tile, hero);
          Pixi$Sweeneyville.Sprite[/* interact */10](hero);
          return Cloning$Sweeneyville.make_clone(app, hero, space, Builder$Sweeneyville.dropped(builder, "ninja"), Builder$Sweeneyville.removed(builder));
        }));
  return app;
}

exports.load  = load;
exports.start = start;
/* load Not a pure module */
