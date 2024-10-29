import { state } from "../state.js";

function parseDoctype() {
  if (
    state.html.substring(state.pos, state.pos + 9).toLowerCase() === "<!doctype"
  ) {
    const doctypeEnd = state.html.indexOf(">", state.pos);
    if (doctypeEnd === -1) return null;

    const doctypeContent = state.html
      .slice(state.pos + 9, doctypeEnd)
      .trim()
      .toLowerCase();

    state.pos = doctypeEnd + 1;

    return {
      type: "doctype",
      name: doctypeContent,
    };
  }
  return null;
}

export default parseDoctype;
