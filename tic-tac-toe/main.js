// Write a function called makeBoard() that will generate 9 div with the class empty and another class square.

function makeBoard(){
    const ticTacToe = document.querySelector(".tic-tac-toe");
    for (let i = 0; i < 9; i++) {
        const div = document.createElement("div");
        div.classList.add("empty", "square");
        ticTacToe.append(div);
      }
};

// Call makeBoard() on page load so that 9 squares appear and the board is 3 x 3 squares.
makeBoard();

const squares = document.querySelectorAll('.square');
// console.log(squares[0])
let currentPlayer = 'X'
function makeMove(){
for(i = 0; i < squares.length; i++){
    const square = squares[i]
    square.addEventListener('click', () => {
        if(square.classList.contains('empty')){
        square.classList.remove('empty');
        if (currentPlayer === 'X') {
            square.innerText = 'X';
            currentPlayer = 'O';
            } else {
                square.innerText = 'O';
                currentPlayer = 'X';
            }
        }
    });
}
}

// Add event listeners to all squares
squares.forEach((square) => {
    square.addEventListener('click', () => {
      makeMove()
    });
  });


// Add a listener to the reset button and write an event handler function called reset, that removes the squares and then calls makeBoard() to reset the board.
const button = document.querySelector('button')
// console.log(button)

const ticTacToe = document.querySelector('.tic-tac-toe')
button.addEventListener('click', () => {
    while (ticTacToe.firstChild) {
        ticTacToe.firstChild.remove();
    }
    makeBoard()
    makeMove()
  })

console.log(ticTacToe)

