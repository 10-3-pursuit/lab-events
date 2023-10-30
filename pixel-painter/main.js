// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

const currentColorObj = document.querySelector("#current-color");

const colorDivs = document.querySelectorAll("#palette div");
colorDivs.forEach((div) => {
  div.addEventListener("click", () => {
    const style = div.getAttribute("style");
    currentColorObj.setAttribute("style", style);
  })
})

const cells = document.querySelectorAll("#canvas .cell");
cells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const color = currentColorObj.getAttribute("style");
    cell.setAttribute("style", color);
  })
})