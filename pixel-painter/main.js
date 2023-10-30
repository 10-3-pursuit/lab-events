// Do not change the code below.
// Draw Grid
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

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
  })
})

// Create a button that, when clicked, resets all cells so that they all have a background of white.
const wrapper = document.querySelector('#wrapper');

const sectionReset = document.createElement('section');
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
sectionReset.append(resetButton);
wrapper.append(sectionReset);
// console.log(wrapper)

resetButton.addEventListener('click', () => {
  cells.forEach((cell) => {
    cell.style.backgroundColor = 'white'
  })
})

// Create a button that, when clicked, changes all of the cells so that they match the #current-color element's background.
const sectionFillAll = document.createElement('section');
const fillAllButton = document.createElement('button');
fillAllButton.textContent = 'Fill All';
sectionFillAll.append(fillAllButton);
wrapper.append(sectionFillAll);

fillAllButton.addEventListener('click', () => {
  cells.forEach((cell) => {
    cell.style.backgroundColor = currentColor.style.backgroundColor
  })
})

console.log(wrapper)
