// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

const colors = document.querySelectorAll('#palette .color');
let currentColor = document.querySelector('#current-color');
// change current color to match selected color 
for (let color of colors) {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
    console.log(`${color.style.background} was picked`);
  });
}

const cells = document.querySelectorAll(".cell");
for (let cell of cells) {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  });
}