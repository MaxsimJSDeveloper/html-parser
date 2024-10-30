import { templateFirst, templateSecond } from "./js/templates.js";
import updateLineNumbers from "./js/ui/updateLineNumbers.js";

import refs from "./js/refs.js";
import eventHandlers from "./js/eventHandlers.js";

refs.html.addEventListener("input", eventHandlers.handleInput);
refs.html.addEventListener("scroll", eventHandlers.syncScroll);
refs.html.addEventListener("keydown", eventHandlers.handleTab);
refs.convertBtn.addEventListener("click", eventHandlers.handleConvert);
refs.firstTemplateBtn.addEventListener("click", () =>
  eventHandlers.handleTemplate(templateFirst)
);
refs.secondTemplateBtn.addEventListener("click", () =>
  eventHandlers.handleTemplate(templateSecond)
);
refs.clearBtn.addEventListener("click", eventHandlers.handleClear);

updateLineNumbers();
