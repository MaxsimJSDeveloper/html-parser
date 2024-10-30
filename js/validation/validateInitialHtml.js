function validateInitialHtml(html) {
  if (!html || typeof html !== "string") {
    throw new Error("Input must be a non-empty string");
  }

  const trimmedHtml = html.trim();

  if (trimmedHtml.length === 0) {
    throw new Error("HTML input cannot be empty");
  }

  if (trimmedHtml.length > 10000) {
    throw new Error("html cannot contain more than 10000 characters");
  }

  if (!trimmedHtml.startsWith("<")) {
    throw new Error("HTML code must start with '<'");
  }

  const openTags = trimmedHtml.match(/<[^/>][^>]*>/g) || [];
  const closeTags = trimmedHtml.match(/<\/[^>]+>/g) || [];

  if (openTags.length < closeTags.length) {
    throw new Error("Found more closing tags than opening tags");
  }
}

export default validateInitialHtml;
