import errorHandler from "./middlewares/errorHandler.js";
import parseNode from "./parseNode.js";
import { state } from "./state.js";
import normalizeHtml from "./utils/normalizeHtml.js";

import validateInitialHtml from "./validation/validateInitialHtml.js";
import validateNode from "./validation/validateNode.js";

function html2json(html) {
  state.doctypeCount = 0;

  validateInitialHtml(html);
  state.html = normalizeHtml(html);
  state.pos = 0;

  const nodes = [];

  const safeParseNode = errorHandler((...args) => {
    const node = parseNode(...args);
    validateNode(node);
    return node;
  });

  while (state.pos < state.html.length) {
    const node = safeParseNode();

    if (node === null) {
      const contextSnippet = state.html.substring(state.pos, state.pos + 20);
      const error = new Error(
        `Failed to parse HTML. Context: '${contextSnippet}...'`
      );
      error.position = state.pos;
      throw error;
    }

    if (node) {
      nodes.push(node);
    }
  }

  return nodes.length === 1 ? nodes[0] : nodes;
}

export default html2json;
