// Яка кількість смиволів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, т
// о border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи
// valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");
input.addEventListener("input", (event) => {
  const {
    classList,
    value,
    dataset: { length },
  } = event.target;

  classList.add("valid");
  value.length !== +length
    ? classList.add("invalid")
    : classList.remove("invalid");
});
