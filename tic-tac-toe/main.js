const ticTacToe = document.querySelector(".tic-tac-toe");
function makeBoard() {
  for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.classList.add("empty");
    div.classList.add('square')
    ticTacToe.append(div);
  }
}
makeBoard()

const squares = document.getElementsByClassName('square')
let currentPlayer = 'X'
function makeMove() {
  for(let square of squares) {
    square.innerText = ''
    square.addEventListener('click', ()=> {
      if(square.classList.contains('empty')) {
        square.innerText = currentPlayer
        if(currentPlayer === 'X') {
          currentPlayer = 'O'
        } else {
          currentPlayer = 'X'
        }
        square.classList.remove('empty')
      }
    })
  }
  return squares
}

makeMove()

const reset = document.querySelector('button')

reset.addEventListener('click', () => {
  while (ticTacToe.firstChild) {
    ticTacToe.firstChild.remove()
  }
  makeBoard()
  makeMove()
})

