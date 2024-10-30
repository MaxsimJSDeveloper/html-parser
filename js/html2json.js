import parseNode from "./parseNode.js";
import validateInitialHtml from "./validation/validateInitialHtml.js";
import { state } from "./state.js";
import normalizeHtml from "./utils/normalizeHtml.js";
import validateNode from "./validation/validateNode.js";

function html2json(html) {
  validateInitialHtml(html);
  state.html = normalizeHtml(html);
  state.pos = 0;
  state.doctypeCount = 0;

  const nodes = [];
  while (state.pos < state.html.length) {
    try {
      const node = parseNode();
      if (node) {
        validateNode(node);
        nodes.push(node);
      } else {
        throw new Error(`Failed to parse HTML at position ${state.pos}.`);
      }
    } catch (error) {
      throw error;
    }
  }

  return nodes.length === 1 ? nodes[0] : nodes;
}

export default html2json;
