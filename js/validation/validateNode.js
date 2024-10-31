import state from "../state.js";

function validateNode(node) {
  if (!node) return;

  if (node.type === "doctype") {
    state.doctypeCount++;

    const contentBeforeDoctype = state.html.substring(0, state.pos).trim();
    if (contentBeforeDoctype && !contentBeforeDoctype.startsWith("<!DOCTYPE")) {
      const error = new Error("Invalid content before <!DOCTYPE>");
      error.position = state.pos;
      throw error;
    }
  }

  if (node === null && state.pos < state.html.length) {
    const contextSnippet = state.html.substring(state.pos, state.pos + 10);
    const error = new Error(`Invalid HTML. Context: '${contextSnippet}...'`);
    error.position = state.pos;
    throw error;
  }
}

export default validateNode;
