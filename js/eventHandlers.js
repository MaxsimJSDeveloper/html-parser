import html2json from "./html2json.js";
import refs from "./refs.js";
import { state } from "./state.js";
import updateLineNumbers from "./ui/updateLineNumbers.js";

const eventHandlers = {
  handleInput: (e) => {
    const cursorPos = refs.html.selectionStart;
    updateLineNumbers();
    refs.html.setSelectionRange(cursorPos, cursorPos);
  },

  handleTab: (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = refs.html.selectionStart;
      refs.html.value =
        refs.html.value.substring(0, start) +
        "  " +
        refs.html.value.substring(refs.html.selectionEnd);
      refs.html.selectionStart = refs.html.selectionEnd = start + 2;
      updateLineNumbers();
    }
  },

  handleConvert: () => {
    state.doctypeCount = 0;
    try {
      const result = html2json(refs.html.value);
      refs.json.value = JSON.stringify(result, null, 2);
    } catch (error) {
      refs.json.value = `Error: ${error.message}`;
    }
  },

  handleTemplate: (template) => {
    refs.html.value = template;
    eventHandlers.handleConvert();
    updateLineNumbers();
  },

  handleClear: () => {
    state.doctypeCount = 0;
    refs.html.value = refs.json.value = "";
    updateLineNumbers();
  },

  syncScroll: () => {
    if (refs.html.scrollTop !== refs.lineNumbers.scrollTop) {
      refs.lineNumbers.scrollTop = refs.html.scrollTop;
    }
  },
};

export default eventHandlers;
