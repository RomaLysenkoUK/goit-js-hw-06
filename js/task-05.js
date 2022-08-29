// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє
// його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputUpp = document.querySelector("#name-input");
const outputNpp = document.querySelector("#name-output");

inputUpp.addEventListener("input", (event) => {
  const value = event.target.value;
  outputNpp.textContent = value.length > 0 ? value : "Anonymous";
});
