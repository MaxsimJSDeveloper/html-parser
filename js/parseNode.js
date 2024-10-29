import parseClosingTag from "./parsers/parseClosingTag.js";
import parseComment from "./parsers/parseComment.js";
import parseDoctype from "./parsers/parseDoctype.js";
import parseOpeningTag from "./parsers/parseOpeningTag.js";
import parseText from "./parsers/parseText.js";
import skipWhitespace from "./utils/skipWhitespace.js";

import { state } from "./state.js";
import { SELF_CLOSING_TAGS } from "./utils/selfTags.js";

function parseNode() {
  skipWhitespace();

  if (state.pos >= state.html.length) {
    return null;
  }

  if (state.html[state.pos] !== "<") {
    return parseText();
  }

  const doctypeNode = parseDoctype();
  if (doctypeNode) return doctypeNode;

  const commentNode = parseComment();
  if (commentNode) return commentNode;

  if (parseClosingTag()) return null;

  const { tagName, tagEnd, selfClosing, attributes } = parseOpeningTag();

  const node = {
    type: "element",
    tagName,
    ...(attributes && { attributes }),
    children: [],
  };

  if (selfClosing || SELF_CLOSING_TAGS.includes(tagName)) {
    state.pos = tagEnd + (selfClosing ? 2 : 1);
    delete node.children;
    return node;
  }

  state.pos = tagEnd + 1;

  while (state.pos < state.html.length) {
    if (state.html.startsWith(`</${tagName}>`, state.pos)) {
      state.pos += tagName.length + 3;
      break;
    }

    const child = parseNode();
    if (child) {
      node.children.push(child);
    }
  }

  if (!node.children.length) {
    delete node.children;
  }

  return node;
}

export default parseNode;
