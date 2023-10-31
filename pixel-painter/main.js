
// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// const colors = document.createElement('click');
// const palette = document.getElementById('palette');
// const currentColor = document.getElementId('current-color');

//set up event listeners to select the current color
// const color = document.querySelector('color');
//color.addEventListener('click', color => {display = 'current-color'}

const currentColor = document.querySelector('#current-color');

const colors = document.querySelectorAll('#palette div')
colors.forEach((color) => {
  color.addEventListener('click', () => {
    currentColor.style.backgroundColor = color.style.backgroundColor 
  })
})

const cells = document.querySelectorAll('.cell')
cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = currentColor.style.backgroundColor
  });
});



