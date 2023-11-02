// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// Get the color palette and current color elements
//Selection of Elements:
/** currentColor: it represents the DOM element with the id "current-color.
 * " This is the element whose background color will be changed. 
 * colors: it represents a NodeList containing all elements with the class "color" in the document. 
 * These elements are assumed to be color in your palette.
*/
const currentColor = document.querySelector("#current-color");
const colors = document.querySelectorAll(".color")
 //Event Listeners:
  /** colors.forEach(...):This loop iterates over each element in the NodeList colors
   * element: Represents each individual color circle in the palette.
   * element .addEventListener(...): Adds a click event listener to each color circle.
   * (event) => {...}: The callback function executed when a color circle is clicked.
   * currentColor.style.backgroundColor = 
   * event.target.style.backgroundColor;: Updates the background color of the 
   * #current-color element to match the background color of the clicked color 
   * circle. event.target refers to the clicked color circle.
   */
  colors.forEach(element => { 
   element.addEventListener("click", (event) => {
    //Functionality:
   /**  When a color circle in the palette is clicked, the backGround
    * color element is updated to match the background of the clicked color circle.*/
  currentColor.style.background = event.target.style.backgroundColor;
   });
   /** In All, this code establishes a connection between the color circles in the 
    * palette and the current color element. when a color circle is clicked,
    *  the script captures the clicked color and aplies it as the 
    * background color for the #current-color element. 
    * This aligns with the requirement you mentioned earlier for your pixel painter application.
  */
 });

//  Get all the cells in the grid
const cells = document.querySelectorAll(".cell");

// Add click event listener to each cell
cells.forEach((cell) => {
  cell.addEventListener("click",  () => {
    // Get the background color of the current color element
    const currentColorValue = currentColor.style.backgroundColor;

    // Set the background color of the clicked cell
    cell.style.backgroundColor = currentColorValue;

  }
)}
)














