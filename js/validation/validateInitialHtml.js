function validateInitialHtml(html) {
  if (!html || typeof html !== "string") {
    throw new Error("Input must be a non-empty string");
  }

  const trimmedHtml = html.trim();

  if (trimmedHtml.length === 0) {
    throw new Error("HTML input cannot be empty");
  }

  if (!trimmedHtml.startsWith("<")) {
    throw new Error("HTML code must start with '<'");
  }

  // Basic HTML structure validation
  const openTags = trimmedHtml.match(/<[^/>][^>]*>/g) || [];
  const closeTags = trimmedHtml.match(/<\/[^>]+>/g) || [];

  if (openTags.length < closeTags.length) {
    throw new Error("Found more closing tags than opening tags");
  }
}

export default validateInitialHtml;
