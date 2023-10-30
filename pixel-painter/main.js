// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// Get the color palette and current color elements
// Use getElementByid in order to access the paleete and its elements.
//  const palette = document.querySelector("#palette");
 const currentColor = document.querySelector("#current-color");
 const colors = document.querySelectorAll(".color")

 // Set the initial color to black
 
 for (let color of colors) {
  color.addEventListener("click", () => {
    currentColor.style.backgroundColor = color.style.backgroundColor;
  });
}

const cells = document.querySelectorAll(".cell");

for (let cell of cells) {
  cell.addEventListener("mousedown", () => {
    cell.style.backgroundColor = currentColor.style.backgroundColor;
  });
}
