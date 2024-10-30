import { state } from "../state.js";
import skipWhitespace from "../utils/skipWhitespace.js";

function parseText() {
  try {
    skipWhitespace();

    if (state.pos >= state.html.length || state.html[state.pos] !== "<") {
      let textEnd = state.html.indexOf("<", state.pos);
      if (textEnd === -1) textEnd = state.html.length;

      const text = state.html.slice(state.pos, textEnd).trim();
      state.pos = textEnd;

      return text ? { type: "text", content: text } : null;
    }
    return null;
  } catch (error) {
    throw new Error(`Failed to parse text at position: ${state.pos}`);
  }
}

export default parseText;
