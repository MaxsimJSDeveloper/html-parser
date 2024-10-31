import state from "../state.js";

function skipWhitespace() {
  while (state.pos < state.html.length && /\s/.test(state.html[state.pos])) {
    state.pos++;
  }
}

export default skipWhitespace;
