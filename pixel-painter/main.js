// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// get all colors
const colors = document.querySelectorAll("#palette .color");
console.log(colors);

let selectedColor = null;

//updates color
function updateCurrentColor() {
  const currentColor = document.querySelector("#current-color");
  currentColor.style.background = selectedColor;
}

for(let color of colors){
  const backgroundColor = color.style.background;
  color.addEventListener("click", function() {
    // Set the selected color to the clicked color's background
    selectedColor = backgroundColor;
    updateCurrentColor();
  });
}

// Add event listener for each cell in the grid with a function to set color of background to selected color
const cells = document.querySelectorAll(".cell");
for (let cell of cells) {
  cell.addEventListener("click", function(event){
    if (selectedColor) {
      event.target.style.background = selectedColor;
    }
  });
}

// Function to reset the board 
function resetBoard() {
  for (let cell of cells) {
    cell.style.background = "white";
  }
  selectedColor = null; // Reset the selected color
  updateCurrentColor();
}

// created a "Reset Board" button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Board";
resetButton.addEventListener("click", resetBoard);
// resetBoard calls created function to work

// Style for the button
resetButton.style.border = "2px solid";
resetButton.style.display = "inline-block";
resetButton.style.marginLeft = "44%"; 

// Append the button didn't work well. so used insertAdjacentElement
const currentColor = document.querySelector("#current-color");
currentColor.insertAdjacentElement("afterend", resetButton);
// afterend is the position right after tthe current-color section elment