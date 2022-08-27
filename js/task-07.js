document.querySelector("#font-size-control").oninput = function () {
  if (
    this.value >= this.getAttribute("min") &&
    this.value <= this.getAttribute("max")
  ) {
    document.querySelector("#text").style.fontSize = `${this.value} px`;
  }
};
