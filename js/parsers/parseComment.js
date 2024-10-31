import { state } from "../state.js";
import getErrorContext from "../utils/getErrorContext.js";

function parseComment() {
  try {
    if (state.html.startsWith("<!--", state.pos)) {
      const commentEnd = state.html.indexOf("-->", state.pos);
      if (commentEnd === -1) {
        const snippet = state.html.slice(state.pos, state.pos + 20);
        throw new Error(
          `Missing closing '-->' for comment near: "${snippet}..."`
        );
      }
      const comment = state.html.slice(state.pos + 4, commentEnd).trim();
      state.pos = commentEnd + 3;
      return { type: "comment", content: comment };
    }
    return null;
  } catch (error) {
    error.message = `Error parsing comment near: "${getErrorContext(
      state.pos
    )}...". Check comment syntax.`;
    throw error;
  }
}

export default parseComment;
