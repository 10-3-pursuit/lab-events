// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// Color selector 
const currentColor = document.getElementById("current-color");
const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
  color.addEventListener("click", function() {
    currentColor.style.backgroundColor = color.style.backgroundColor;
  });
 });

//grid painter 
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", function() {
    cell.style.backgroundColor = currentColor.style.backgroundColor;
  });
}); 