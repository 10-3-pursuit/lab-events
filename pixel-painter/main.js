// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// Grab the palette
const palette = document.querySelector("#palette");

// Grab the current color
const currentColor = document.querySelector("#current-color");

// if the click event hits then it'll change the background color of the current color
palette.addEventListener("click", (event) => {
  let selectedColor = event.target.style.background;
  currentColor.style.background = selectedColor;
});