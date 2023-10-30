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