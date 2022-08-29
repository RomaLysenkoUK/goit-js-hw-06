// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і
// змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//  перетягуючи повзунок,
//     буде змінюватися розмір тексту.

const asp = document.querySelector("#font-size-control");
asp.addEventListener("input", (event) => {
  const { target } = event;
  document.querySelector("#text").style.fontSize = `${target.value}px`;
});
