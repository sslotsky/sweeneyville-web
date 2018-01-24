type event;
[@bs.scope("window")][@bs.val] external listen : (string, event => unit) => unit = "addEventListener";
