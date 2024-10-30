import { state } from "../state.js";

function parseComment() {
  try {
    if (state.html.startsWith("<!--", state.pos)) {
      const commentEnd = state.html.indexOf("-->", state.pos);
      if (commentEnd === -1) {
        throw new Error(
          `Missing closing '-->' for comment at position: ${state.pos}`
        );
      }
      const comment = state.html.slice(state.pos + 4, commentEnd).trim();
      state.pos = commentEnd + 3;
      return { type: "comment", content: comment };
    }
    return null;
  } catch (error) {
    throw new Error(`Failed to parse comment at position: ${state.pos}`);
  }
}

export default parseComment;
