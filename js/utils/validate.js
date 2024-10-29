import { state } from "../state.js";

function validate(node) {
  if (node && node.type === "doctype") {
    state.doctypeCount++;
    if (state.doctypeCount > 1) {
      throw new Error("HTML document can only have one doctype.");
    }
  }

  if (node === null && state.pos < state.html.length) {
    throw new Error(
      `Unexpected token at position ${state.pos}: '${state.html[state.pos]}'`
    );
  }
}

export default validate;
