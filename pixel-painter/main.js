// Do not change the code below.
// Draw Grid

// makes the perpendicular lines on the grid aka cells with div tag and class "cell" and adds it under parent <main>
const main = document.querySelector("main"); // selects the <main> element in the HTML document and stores it in the 'main' variable
for (let i = 0; i < 100; i++) { // for loop to create 100 <div> elements and add them to the 'main' element
  const div = document.createElement("div"); // creates a new <div> element and stores it in the 'div' variable
  div.classList.add("cell"); // adds the CSS class "cell" to the newly created <div> element - used for styling
  main.append(div); // appends the created <div> element to the 'main' element, adding it to the DOM
}

// to add color to the bottom square in grid (see DOM and click on section with id current-color)
const currentColor = document.querySelector("#current-color"); // selects section with id "current-color"
const paletteDivArr = document.querySelectorAll("#palette div"); // selects div elements with parent secion with id "palette" and puts them in an array so output is iterable
paletteDivArr.forEach((colorDiv) => { // can use for loop or foreach method to iterate and apply event listeners to div in palette id section
  colorDiv.addEventListener("click",() => { // when user clicks on colorDiv element
    const style = colorDiv.getAttribute("style"); // gets the style attribute assigned to it in html which is background color depending on index of element
    currentColor.setAttribute("style", style); // sets the section selected by query selector using id "current-color" to the "style" indicated in html once retrived by getAttribute method which is saved to variable style
  })
});

// make cells for the grid change to same color as bottom square on click
const cellArr = document.querySelectorAll("#canvas .cell"); // main has id canvas which is where div elements with class cell are appended to. This selects each one in order to make array and puts it in a variable