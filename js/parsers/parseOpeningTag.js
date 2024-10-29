import { state } from "../state.js";
import parseAttributes from "./parseAttributes.js";

function parseOpeningTag() {
  const tagStart = state.pos + 1;
  let tagEnd = state.html.indexOf(">", state.pos);
  let selfClosing = false;

  if (state.html[tagEnd - 1] === "/") {
    selfClosing = true;
    tagEnd--;
  }

  const spaceIndex = state.html.slice(tagStart, tagEnd).search(/\s/);
  const tagNameEnd = spaceIndex === -1 ? tagEnd : tagStart + spaceIndex;
  const tagName = state.html.slice(tagStart, tagNameEnd).toLowerCase();

  const attributes =
    spaceIndex !== -1 ? parseAttributes(tagNameEnd, tagEnd) : undefined;

  return { tagName, tagEnd, selfClosing, attributes };
}

export default parseOpeningTag;
