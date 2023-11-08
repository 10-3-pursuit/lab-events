// Do not change the code below.
// Draw Grid

const main = document.querySelector("main"); // selects the <main> element in the HTML document and stores it in the 'main' variable
for (let i = 0; i < 100; i++) { // for loop to create 100 <div> elements and add them to the 'main' element
  const div = document.createElement("div"); // creates a new <div> element and stores it in the 'div' variable
  div.classList.add("cell"); // adds the CSS class "cell" to the newly created <div> element - used for styling
  main.append(div); // appends the created <div> element to the 'main' element, adding it to the DOM
}


const currentColor = document.querySelector("#current-color");