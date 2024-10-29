import html2json from "./js/html2json.js";
import { templateFirst, templateSecond } from "./js/templates.js";

const html = document.querySelector("#html");
const json = document.querySelector("#json");

const convertBtn = document.querySelector("#convert-btn");
const firstTemplateBtn = document.querySelector("#output-first-template");
const secondTemplateBtn = document.querySelector("#output-second-template");
const clearBtn = document.querySelector("#clear-btn");

convertBtn.addEventListener("click", () => {
  const htmlValue = html.value;
  try {
    const result = html2json(htmlValue);
    json.value = JSON.stringify(result, null, 2);
  } catch (error) {
    json.value = "Error: " + error.message;
  }
});

firstTemplateBtn.addEventListener("click", () => {
  html.value = templateFirst;
  const result = html2json(templateFirst);
  json.value = JSON.stringify(result, null, 2);
});

secondTemplateBtn.addEventListener("click", () => {
  html.value = templateSecond;
  const result = html2json(templateSecond);
  json.value = JSON.stringify(result, null, 2);
});

clearBtn.addEventListener("click", () => {
  json.value = "";
});
