import html2json from "./js/html2json.js";
import { state } from "./js/state.js";
import { templateFirst, templateSecond } from "./js/templates.js";

const html = document.querySelector("#html");
const json = document.querySelector("#json");

const convertBtn = document.querySelector("#convert-btn");
const firstTemplateBtn = document.querySelector("#output-first-template");
const secondTemplateBtn = document.querySelector("#output-second-template");
const clearBtn = document.querySelector("#clear-btn");

convertBtn.addEventListener("click", () => {
  const htmlValue = html.value;
  state.doctypeCount = 0;
  try {
    const result = html2json(htmlValue);
    json.value = JSON.stringify(result, null, 2);
  } catch (error) {
    json.value = "Error: " + error.message;
  }
});

firstTemplateBtn.addEventListener("click", () => {
  html.value = templateFirst;
  state.doctypeCount = 0;
  const result = html2json(templateFirst);
  json.value = JSON.stringify(result, null, 2);
});

secondTemplateBtn.addEventListener("click", () => {
  html.value = templateSecond;
  state.doctypeCount = 0;
  const result = html2json(templateSecond);
  json.value = JSON.stringify(result, null, 2);
});

clearBtn.addEventListener("click", () => {
  state.doctypeCount = 0;
  json.value = "";
});
