// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';


function sequence() {
  var n = [0];
  return (function () {
      var cur = n[0];
      n[0] = cur + 1 | 0;
      return cur;
    });
}

exports.sequence = sequence;
/* No side effect */