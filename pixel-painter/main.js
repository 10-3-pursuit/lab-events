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
const currentColor = document.getElementById("current-color");

// if the click event hits then it'll change the background color of the current color
palette.addEventListener("click", (event) => {
  let selectedColor = event.target.style.background;
  currentColor.style.background = selectedColor;
});

// Grab the cell
const cells = document.querySelectorAll(".cell");

// Loop through the cells since we grabbed all of them
for(let cell of cells ){
  cell.addEventListener("click", (event) => {
    // event.target = cell. so we update the cell color to the current color
    cell.style.background = currentColor.style.background;
  })
};

//  Create a button that, when clicked, resets all cells so that they all have a background of white.

// Create button element
const resetButton = document.createElement("button");

// Give button name
resetButton.textContent = "Reset Button";

// Append it to main
main.append(resetButton);

// event when the button is clicked and changes all cells to white;
resetButton.addEventListener("click", (event) => {
  cells.forEach(cell => {
    cell.style.background = "white";
  });
});







