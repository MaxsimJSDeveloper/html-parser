import state from "../state.js";

function getErrorContext(position, length = 20) {
  return state.html.slice(position, position + length);
}

export default getErrorContext;
