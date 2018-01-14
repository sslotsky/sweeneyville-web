open Slangwidge.Read;

let script = "
  walk right

  on 'mock' do
    shoot right
  end
";

let _ = read(script);

Js.log("Hello, BuckleScript and Reason!");
