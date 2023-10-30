// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// Grab divs with color class
const colors = document.querySelectorAll("div.color:not(.wrapper)")

// Grab color box that holds current color
const currentColor = document.querySelector('#current-color')

// Object of color items and their computed value
const colorNameMap = {
  "rgb(0, 0, 0)": "Black",
  "rgb(255, 0, 0)": "Red",
  "rgb(255, 165, 0)": "Orange",
  "rgb(255, 255, 0)": "Yellow",
  "rgb(0, 128, 0)": "Green",
  "rgb(0, 0, 255)": "Blue",
  "rgb(128, 0, 128)": "Purple",
  "rgb(255, 255, 255)": "White"
};

// For each div with class of color, add a event listener that changes the current color of box to be the color you clicked, and then it logs the color youve selected to the console.
colors.forEach(colorDiv => {
  colorDiv.addEventListener("click", () => {
    const colorValue = window.getComputedStyle(colorDiv).backgroundColor;
    const colorName = colorNameMap[colorValue];
    
    currentColor.style.backgroundColor = colorValue;
    console.log(`You've selected ${colorName}`)
  });
});



// Individualize the pixel boxes and make them separate clickable items
const pixelBox = document.querySelectorAll('#canvas .cell')

pixelBox.forEach(pix => {
  pix.addEventListener("click", () => {
    pix.style.backgroundColor = currentColor.style.backgroundColor
  })
})

// Reset Button
const reset = document.createElement("button")
reset.textContent = "Reset"; 
reset.style.width = "80px"; 
reset.style.height = "80px"; 
reset.style.marginTop = "-20px"
palette.append(reset)


reset.addEventListener("click", () => {
  currentColor.style.backgroundColor = "rgb(255, 255, 255)";
  
  pixelBox.forEach(cell => {
    cell.style.backgroundColor = "rgb(255, 255, 255)";
});
  console.log(`Page Reset`)
});
