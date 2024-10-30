import { state } from "../state.js";

function parseDoctype() {
  try {
    if (
      state.html.substring(state.pos, state.pos + 9).toLowerCase() ===
      "<!doctype"
    ) {
      const doctypeEnd = state.html.indexOf(">", state.pos);
      if (doctypeEnd === -1) {
        throw new Error(
          `Missing closing '>' for doctype at position: ${state.pos}`
        );
      }

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
  } catch (error) {
    throw new Error(`Failed to parse doctype at position: ${state.pos}`);
  }
}

export default parseDoctype;
