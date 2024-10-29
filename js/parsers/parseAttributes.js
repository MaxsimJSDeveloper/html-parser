import { state } from "../state.js";

function parseAttributes(tagNameEnd, tagEnd) {
  const attributes = {};
  const attrString = state.html.slice(tagNameEnd, tagEnd).trim();
  const attrRegex = /([^\s=]+)(?:="([^"]*)")?/g;
  let match;

  while ((match = attrRegex.exec(attrString)) !== null) {
    const [, name, value] = match;
    attributes[name] = value || "";
  }

  return Object.keys(attributes).length ? attributes : undefined;
}

export default parseAttributes;
