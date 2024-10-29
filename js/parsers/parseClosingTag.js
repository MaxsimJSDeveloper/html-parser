import { state } from "../state.js";

function parseClosingTag() {
  if (state.html[state.pos + 1] === "/") {
    const closeTagEnd = state.html.indexOf(">", state.pos);
    state.pos = closeTagEnd + 1;
    return true;
  }
  return false;
}

export default parseClosingTag;
