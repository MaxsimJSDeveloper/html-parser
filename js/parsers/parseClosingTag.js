import { state } from "../state.js";

function parseClosingTag() {
  try {
    if (state.html[state.pos + 1] === "/") {
      const closeTagEnd = state.html.indexOf(">", state.pos);
      if (closeTagEnd === -1) {
        throw new Error(`Missing closing '>' at position: ${state.pos}`);
      }
      state.pos = closeTagEnd + 1;
      return true;
    }
    return false;
  } catch (error) {
    throw new Error(`Failed to parse closing tag at position: ${state.pos}`);
  }
}

export default parseClosingTag;
