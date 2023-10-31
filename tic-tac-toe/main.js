// Write a function called makeBoard() that will generate 9 div with the class empty and another class square.
const ticTacToe = document.querySelector(".tic-tac-toe");

function makeBoard(){
    for (let i = 0; i < 9; i++) {
        const div = document.createElement("div");
        div.classList.add("empty", "square");
        ticTacToe.append(div);
      }
};
// Call makeBoard() on page load so that 9 squares appear and the board is 3 x 3 squares.
makeBoard();

const squares = document.querySelectorAll('.square');

function makeMove(){
    let currentPlayer = 'X'
    for(let square of squares){
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
        })
    }
}

// Add event listeners to all squares
squares.forEach((square) => {
    square.addEventListener('click', makeMove());
  });


// Add a listener to the reset button and write an event handler function called reset, that removes the squares and then calls makeBoard() to reset the board.
const button = document.querySelector('button')
button.addEventListener('click', () => {
    while (ticTacToe.firstChild) {
        ticTacToe.firstChild.remove();
    }
    makeBoard()
    makeMove()
  })


