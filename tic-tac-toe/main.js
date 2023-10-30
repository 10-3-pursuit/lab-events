const ticTacToeDiv = document.querySelector(".tic-tac-toe");

const makeBoard = () => {
    for (const i of "123456789") {
        const newDiv = document.createElement("div");
        newDiv.classList.add("empty");
        newDiv.classList.add("square");
        ticTacToeDiv.append(newDiv);
    }
}

makeBoard();

let isPlayerOne = true;

const squares = document.querySelectorAll(".square");

const makeMove = (square) => {
    const isEmpty = square.classList.value.includes("empty");
    if (isEmpty) {
        if (isPlayerOne) {
            square.textContent = "x";
        } else {
            square.textContent = "0";
        }
        isPlayerOne = !isPlayerOne;
        square.classList.remove("empty");
    }
};

squares.forEach((square) => {
    square.addEventListener("click", (event) => {
        makeMove(square)
    })
});


const reset = () => {
    squares.forEach((square) => {
        square.remove();
    });
    checkGameIsOver();
    makeBoard();
}


const resetButton = document.querySelector("button");
resetButton.addEventListener("click", reset);

const checkGameIsOver = () => {
    let countOfSquares = 0;
    squares.forEach((square) => {
        if (!square.classList.value.includes("empty")) {
            countOfSquares++;
        }
    })
    if (countOfSquares == 9) {
        // make a pop up that says "Game Over"
        alert("Game Over");
    }
}

// TODO: Write logic to check if X or 0 won and create a message displaying who won
