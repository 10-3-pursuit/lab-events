// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

const currentColor = document.getElementById("current-color");
const palette = document.getElementById("palette");

const colors = palette.getElementsByClassName("color");

console.log(colors)


for (const color of colors) {
  color.addEventListener("click", () => {
        const selectedColor = color.style.background;
        console.log(selectedColor)
        currentColor.style.background = selectedColor;
  }
  )}

  const cells = document.querySelectorAll(".cell");

  for (const cell of cells) {
    cell.addEventListener("click", () => {
      cell.style.background = currentColor.style.background;
    })
  }

  const wrapper = document.getElementById("wrapper");

const resetSection = document.createElement("section");
 wrapper.append(resetSection);
 resetSection.classList.add("resetSpace");

 const resetButton = document.createElement("div");

resetButton.classList.add("reset");

resetSection.append(".reset");






  