import { state } from "../state.js";
import getErrorContext from "../utils/getErrorContext.js";
import parseAttributes from "./parseAttributes.js";

function parseOpeningTag() {
  try {
    const tagStart = state.pos + 1;
    let tagEnd = state.html.indexOf(">", state.pos);
    let selfClosing = false;

    if (tagEnd === -1) {
      throw new Error(
        `Missing closing '>' for opening tag near: "${getErrorContext(
          state.pos
        )}..."`
      );
    }

    if (state.html[tagEnd - 1] === "/") {
      selfClosing = true;
      tagEnd--;
    }

    const spaceIndex = state.html.slice(tagStart, tagEnd).search(/\s/);
    const tagNameEnd = spaceIndex === -1 ? tagEnd : tagStart + spaceIndex;
    const tagName = state.html.slice(tagStart, tagNameEnd).toLowerCase();

    if (!tagName) {
      throw new Error(
        `Invalid opening tag found at position: ${state.pos}. Tag name is empty.`
      );
    }

    const attributes =
      spaceIndex !== -1 ? parseAttributes(tagNameEnd, tagEnd) : undefined;

    return { tagName, tagEnd, selfClosing, attributes };
  } catch (error) {
    error.message = `Error parsing opening tag near: "${getErrorContext(
      state.pos
    )}...". ${error.message}`;
    throw error;
  }
}

export default parseOpeningTag;
