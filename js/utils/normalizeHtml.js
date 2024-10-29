function normalizeHtml(html) {
  return html.replace(/>\s+</g, "><").trim();
}

export default normalizeHtml;
