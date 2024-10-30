import refs from "../refs.js";

function updateLineNumbers() {
  const content = refs.html.value;
  const linesCount = (content.match(/\n/g) || []).length + 1;
  const numbers = Array.from(
    { length: linesCount },
    (_, i) => `<span class="line-number">${i + 1}</span>`
  ).join("");
  refs.lineNumbers.innerHTML = numbers;

  const maxDigits = String(linesCount).length;
  refs.lineNumbers.style.width = `${maxDigits * 10 + 10}px`;

  html.style.paddingLeft = `${maxDigits * 10 + 15}px`;
}

export default updateLineNumbers;
