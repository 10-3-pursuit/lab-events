// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// END
const header = document.querySelector("header")

const reset = document.createElement("button")
reset.innerText = "Reset"
header.append(reset)


let currentColor = document.getElementById("current-color")

// Instead of getElements, could use querySelectorAll("pallete div")
const colors = document.getElementsByClassName("color");
for (let color of colors) {
    color.addEventListener("click", () => {
      currentColor.style.backgroundColor = color.style.backgroundColor
    });
}

const cells = document.getElementsByClassName("cell");
for (let cell of cells) {
    cell.addEventListener("click", () => {
      cell.style.backgroundColor = currentColor.style.backgroundColor
    });
}

// RESET TO WHITE
for (let cell of cells) {
    reset.addEventListener("click", () => {
      cell.style.backgroundColor = "white"
    });
}