import errorHandler from "./middlewares/errorHandler.js";
import parseNode from "./parseNode.js";
import { state } from "./state.js";
import normalizeHtml from "./utils/normalizeHtml.js";

function html2json(html) {
  state.html = normalizeHtml(html);
  state.pos = 0;

  const nodes = [];
  let doctypeCount = 0;

  const safeParseNode = errorHandler((...args) => {
    const node = parseNode(...args);

    if (node && node.type === "doctype") {
      doctypeCount++;
      if (doctypeCount > 1) {
        throw new Error("HTML document can only have one doctype.");
      }
    }
    return node;
  });

  while (state.pos < state.html.length) {
    const node = safeParseNode();
    if (node === null) {
      throw new Error("Error while parsing HTML");
    }

    if (node) {
      nodes.push(node);
    }
  }
  return nodes.length === 1 ? nodes[0] : nodes;
}

export default html2json;
