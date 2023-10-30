// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

//grab the current color box
const currentColor = document.querySelector("#current-color");
//grab each color in the colors palette
//I look at this as an array bc it is essentially a list of colors
const colorsArray = document.querySelectorAll(".color");

for (let color of colorsArray) {
  color.addEventListener("mousedown", () => {
    currentColor.style.background = color.style.background;
  });
}
