open Slangwidge.Read;

let validate = script => {
  let program = read(script);

  switch program {
    | Some(_) => Js.true_
    | _ => Js.false_
  };
};
