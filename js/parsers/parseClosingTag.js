import { state } from "../state.js";
import getErrorContext from "../utils/getErrorContext.js";

function parseClosingTag() {
  try {
    if (state.html[state.pos + 1] === "/") {
      const closeTagEnd = state.html.indexOf(">", state.pos);
      if (closeTagEnd === -1) {
        const snippet = state.html.slice(state.pos, state.pos + 20);
        throw new Error(
          `Missing closing '>' in closing tag near: "${snippet}..."`
        );
      }
      state.pos = closeTagEnd + 1;
      return true;
    }
    return false;
  } catch (error) {
    error.message = `Error parsing closing tag near: "${getErrorContext(
      state.pos
    )}...". Check HTML syntax.`;
    throw error;
  }
}

export default parseClosingTag;
