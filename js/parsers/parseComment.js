import { state } from "../state.js";

function parseComment() {
  if (state.html.startsWith("<!--", state.pos)) {
    const commentEnd = state.html.indexOf("-->", state.pos);
    const comment = state.html.slice(state.pos + 4, commentEnd).trim();
    state.pos = commentEnd + 3;
    return { type: "comment", content: comment };
  }
  return null;
}

export default parseComment;
