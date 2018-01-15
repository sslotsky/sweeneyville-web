import CodeMirror from "codemirror";

function wordRegExp(words, end) {
  return new RegExp(
    (end ? "" : "^") + "(?:" + words.join("|") + ")" + (end ? "$" : "\\b")
  );
}

const keywords = wordRegExp([
  "move",
  "walk",
  "shoot",
  "listen",
  "send",
  "do",
  "end"
]);

const atoms = wordRegExp(["up", "down", "left", "right"]);
const indentKeywords = ["do"];
const dedentKeywords = ["end"];

CodeMirror.defineMode("slangwidge", config => {
  const tokenBase = (stream, state) => {
    if (stream.eatSpace()) {
      return null;
    }

    if (stream.match(keywords)) {
      const token = stream.current();
      if (indentKeywords.includes(token)) {
        state.indent += 1;
      } else if (dedentKeywords.includes(token)) {
        state.indent = Math.max(state.indent - 1, 0);
      }

      stream.next();
      return "keyword";
    }

    if (stream.match(atoms)) {
      stream.next();
      return "atom";
    }

    stream.next();
    return null;
  };

  return {
    token: (stream, state) => {
      return state.tokenize[state.tokenize.length - 1](stream, state);
    },
    startState: () => ({
      tokenize: [tokenBase],
      indent: 0,
      lastToken: null
    }),
    indent: (state, textAfter) => {
      if (dedentKeywords.includes(textAfter)) {
        return config.indentUnit * Math.max(state.indent - 1, 0);
      }

      return config.indentUnit * state.indent;
    },
    electricInput: wordRegExp(dedentKeywords, true)
  };
});
