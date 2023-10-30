 // Get the color palette and current color elements
 // Use 
 const palette = document.getElementById("palette");
 const currentColor = document.getElementById("current-color");

 // Set the initial color to black
 currentColor.style.backgroundColor = "black";

 // Add a click event listener to the color palette
 palette.addEventListener("click", function (event) {
   // Check if the clicked element has the "color" class
   if (event.target.classList.contains("color")) {
     // If yes, set the current color to the clicked color
     currentColor.style.backgroundColor = event.target.style.backgroundColor;
   }
 });

 // Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
