import state from "../state.js";
import getErrorContext from "../utils/getErrorContext.js";

function parseDoctype() {
  try {
    if (
      state.html.substring(state.pos, state.pos + 9).toLowerCase() ===
      "<!doctype"
    ) {
      if (state.doctypeCount >= 1) {
        throw new Error(
          `Multiple DOCTYPE declarations found near: "${getErrorContext(
            state.pos
          )}..."`
        );
      }

      const doctypeEnd = state.html.indexOf(">", state.pos);
      if (doctypeEnd === -1) {
        throw new Error(
          `Missing closing '>' for doctype near: "${getErrorContext(
            state.pos
          )}..."`
        );
      }

      const doctypeContent = state.html
        .slice(state.pos + 9, doctypeEnd)
        .trim()
        .toLowerCase();

      state.pos = doctypeEnd + 1;

      state.doctypeCount++;

      return {
        type: "doctype",
        name: doctypeContent,
      };
    }
    return null;
  } catch (error) {
    error.message = `Error parsing doctype near: "${getErrorContext(
      state.pos
    )}...". Check doctype syntax.`;
    throw error;
  }
}

export default parseDoctype;
