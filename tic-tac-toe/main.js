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