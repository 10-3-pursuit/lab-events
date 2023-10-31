// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}


const palettes = document.querySelectorAll(".color");

const currentColor = document.querySelector("#current-color")

for(let color of palettes){
  color.addEventListener("click",() => {
    const chosenColor = color.style.background;
    currentColor.style.background = chosenColor
  })
}

const cells = document.querySelectorAll(".cell");

for(let cell of cells){
  cell.addEventListener("mousedown", () =>{
    cell.style.background = currentColor.style.background
  })
}

const resetButton = document.createElement("button")

resetButton.addEventListener("click",() =>{
  for(let cell of cells){
    cell.style.background = "white"
  }
})


resetButton.textContent = "Reset"
resetButton.style.display = "flex"
resetButton.style.padding = "10px"
resetButton.style.margin = "auto"
const canvas = document.querySelector("#canvas");
canvas.append(resetButton)

currentColor.before(resetButton)