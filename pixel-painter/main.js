// Do not change the code below.
// Draw Grid
// const main = document.querySelector("main");
// for (let i = 0; i < 100; i++) {
//   const div = document.createElement("div");
//   div.classList.add("cell");
//   main.append(div);
// }

const main = document.querySelector("main");
const numberOfCells = 19;
for (let i = 0; i < numberOfCells * numberOfCells; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

const resetButton = document.querySelector("#reset-button");
const cells = main.querySelectorAll(".cell");

resetButton.addEventListener("click", function () {
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
