// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

const resetButton = document.createElement("button");
resetButton.innerHTML = "Reset";
main.append(resetButton);

//grab the current color box
const currentColor = document.querySelector("#current-color");
//grab each color in the colors palette
//I look at this as an array bc it is essentially a list of colors
const colorsArray = document.querySelectorAll(".color");

//loop through the colorsArray
//add an eventListener to each element in the colors Array
// update the current color to the selected color of the palette
// use dot notation because each element in the array is essentially an object
for (let color of colorsArray) {
  color.addEventListener("mousedown", () => {
    currentColor.style.background = color.style.background;
  });
}

const cellsArray = document.querySelectorAll(".cell");

for (let cell of cellsArray) {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  });
}

for (let cell of cellsArray) {
  reset.addEventListener("click", () => {
    cell.style.background = "white";
  });
}
