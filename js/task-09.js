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
