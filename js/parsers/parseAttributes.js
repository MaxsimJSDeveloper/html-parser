import { state } from "../state.js";

function parseAttributes(tagNameEnd, tagEnd) {
  const attributes = {};
  const attrString = state.html.slice(tagNameEnd, tagEnd).trim();
  const attrRegex = /([^\s=]+)(?:="([^"]*)")?/g;
  let match;

  try {
    while ((match = attrRegex.exec(attrString)) !== null) {
      const [, name, value] = match;
      if (!name) {
        throw new Error(
          `Failed to parse attribute name in tag: "${attrString}"`
        );
      }
      attributes[name] = value || "";
    }
  } catch (error) {
    error.message = `Error parsing attributes for tag with content: "${attrString}". Please check the syntax.`;
    throw error;
  }

  return Object.keys(attributes).length ? attributes : null;
}

export default parseAttributes;
