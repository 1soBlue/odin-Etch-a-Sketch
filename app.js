let gridSizeButton = document.querySelector("#promptSize");
let inputSize = 16;
const grid = document.querySelector("#grid");
gridSizeButton.addEventListener("click", function () {
  inputSize = prompt("Please enter the amount of squares per size:");
  drawGrid(inputSize);
});
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  location.reload();
});
function drawGrid(size) {
  const divs = Array.from(document.querySelectorAll(".box"));
  for (let div of divs) {
    grid.removeChild(div);
  }
  for (let i = size * size; i > 0; i--) {
    let gridBox = document.createElement("div");
    gridBox.style.cssText = `border: 1px black solid; width: 
    ${960 / size}px; height: ${960 / size}px`;
    gridBox.classList.add("box");
    grid.appendChild(gridBox);
  }
}
drawGrid(inputSize);
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mouseenter", function () {
    this.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  });
});
function randomColor() {
  let randomColorCode = Math.floor(Math.random() * 256);
  return randomColorCode;
}
