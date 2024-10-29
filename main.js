import html2json from "./js/html2json.js";
import { state } from "./js/state.js";
import { templateFirst, templateSecond } from "./js/templates.js";

const html = document.querySelector("#html");
const json = document.querySelector("#json");

const convertBtn = document.querySelector("#convert-btn");
const firstTemplateBtn = document.querySelector("#output-first-template");
const secondTemplateBtn = document.querySelector("#output-second-template");
const clearBtn = document.querySelector("#clear-btn");

function handleConversion(htmlValue) {
  state.doctypeCount = 0;
  try {
    const result = html2json(htmlValue);
    json.value = JSON.stringify(result, null, 2);
  } catch (error) {
    json.value = `Error: ${error.message}`;
    console.error("Conversion error:", error);
  }
}

convertBtn.addEventListener("click", () => {
  handleConversion(html.value);
});

firstTemplateBtn.addEventListener("click", () => {
  html.value = templateFirst;
  handleConversion(templateFirst);
});

secondTemplateBtn.addEventListener("click", () => {
  html.value = templateSecond;
  handleConversion(templateSecond);
});

clearBtn.addEventListener("click", () => {
  state.doctypeCount = 0;
  html.value = "";
  json.value = "";
});
