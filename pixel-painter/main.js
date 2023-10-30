// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
const currentColor = document.querySelector("#current-color");
const colors = document.querySelectorAll(".color");

for (let color of colors) {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
}
const cells = document.querySelectorAll(".cell");
for (let cell of cells) {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background ;
  });
}
