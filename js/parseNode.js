// Исправленный код функции parseNode
import parseClosingTag from "./parsers/parseClosingTag.js";
import parseComment from "./parsers/parseComment.js";
import parseDoctype from "./parsers/parseDoctype.js";
import parseOpeningTag from "./parsers/parseOpeningTag.js";
import parseText from "./parsers/parseText.js";
import skipWhitespace from "./utils/skipWhitespace.js";

import { SELF_CLOSING_TAGS } from "./utils/selfTags.js";
import parseCssContent from "./parsers/parseCssContent.js";
import getErrorContext from "./utils/getErrorContext.js";
import { state } from "./state.js";

const CLOSING_TAG_LENGTH = 3;

function parseNode() {
  try {
    skipWhitespace();

    if (state.pos >= state.html.length) return null;

    if (state.html[state.pos] !== "<") {
      return parseText();
    }

    const doctypeNode = parseDoctype();
    if (doctypeNode) return doctypeNode;

    const commentNode = parseComment();
    if (commentNode) return commentNode;

    if (parseClosingTag()) return null;

    const { tagName, tagEnd, selfClosing, attributes } = parseOpeningTag();
    if (!tagName) {
      throw new Error(
        `Invalid opening tag near: ${getErrorContext(state.pos)}`
      );
    }

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
    let foundClosingTag = false;

    if (tagName === "style") {
      const endPos = state.html.indexOf(`</${tagName}>`, state.pos);
      if (endPos === -1) {
        throw new Error(
          `Unclosed style tag <${tagName}> near: ${getErrorContext(state.pos)}`
        );
      }

      const cssContent = state.html.slice(state.pos, endPos);
      node.cssRules = parseCssContent(cssContent);
      state.pos = endPos + tagName.length + CLOSING_TAG_LENGTH;
      return node;
    }

    while (state.pos < state.html.length) {
      if (state.html.startsWith(`</${tagName}>`, state.pos)) {
        foundClosingTag = true;
        state.pos += tagName.length + CLOSING_TAG_LENGTH;
        break;
      }

      const child = parseNode();
      if (child) {
        node.children.push(child);
      } else {
        throw new Error(
          `Failed to parse child node of <${tagName}> near: ${getErrorContext(
            state.pos
          )}`
        );
      }
    }

    if (!foundClosingTag) {
      throw new Error(
        `Unclosed tag <${tagName}> near: ${getErrorContext(state.pos)}`
      );
    }

    if (!node.children.length) {
      delete node.children;
    }

    return node;
  } catch (error) {
    throw error;
  }
}

export default parseNode;
