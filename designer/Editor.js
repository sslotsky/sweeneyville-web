import React from "react";
import { tunnel } from "react-apothecary";
import jsonFormat from "json-format";

export function Editor({ bot }) {
  if (!bot) {
    return false;
  }

  const json = jsonFormat(bot);
  return (
    <div>
      <pre>{json}</pre>
    </div>
  );
}

export default tunnel(state => ({
  bot: state.bots[state.current]
}))(Editor);
