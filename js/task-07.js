// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і
// змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//  перетягуючи повзунок,
//     буде змінюватися розмір тексту.

document.querySelector("#font-size-control").oninput = function () {
  if (
    this.value >= this.getAttribute("min") &&
    this.value <= this.getAttribute("max")
  ) {
    document.querySelector("#text").style.fontSize = `${this.value}px`;
  }
};

// const asp = document.querySelector("#font-size-control");
// asp.addEventListener("input", () => {
//   if (
//     this.value >= this.getAttribute("min") &&
//     this.value <= this.getAttribute("max")
//   ) {
//     document.querySelector("#text").style.fontSize = `${this.value} px`;
//   }
// });
