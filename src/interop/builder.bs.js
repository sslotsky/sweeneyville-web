// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';


function dropped(builder, string) {
  return (function (param, param$1) {
      builder.onDrop(string, param, param$1);
      return /* () */0;
    });
}

function removed(builder) {
  return (function (param) {
      builder.remove(param);
      return /* () */0;
    });
}

exports.dropped = dropped;
exports.removed = removed;
/* No side effect */
