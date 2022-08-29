// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
// по кліку на button.change - color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.querySelector(".change-color").addEventListener("click", function (e) {
  e.preventDefault();
  const body = document.querySelector("body");
  let color = getRandomHexColor();
  document.querySelector(".color").innerHTML = color;
  body.style.backgroundColor = color;
});
