// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

const colors = document.getElementsByClassName('color')
const currentColor = document.getElementById('current-color')
const cells = document.getElementsByClassName('cell')
const palette = document.getElementById('palette')



for(let color of colors) {
  color.addEventListener('click', () => {
    currentColor.style.backgroundColor = color.style.backgroundColor
  })
}

for (let cell of cells) {
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = currentColor.style.backgroundColor  
  }) 
}

// Reset button
const noColors = document.createElement('button')
noColors.innerText = "Reset Grid"
palette.append(noColors)

for (let cell of cells) {
  noColors.addEventListener('click', () => {
    cell.style.backgroundColor = 'white'
  })
}

























