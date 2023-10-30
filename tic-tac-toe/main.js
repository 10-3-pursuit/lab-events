// Grabs the container where the grid will be created
const ticTacToeSection = document.querySelector(".tic-tac-toe");
// Set the first symbol 
let currentPlayer = 'X';

function makeBoard() {
    // Create a div
    const ticTacToeGrid = document.createElement("div");
    // Convert display to grid
    ticTacToeGrid.style.display = "grid";
    // Grid styles are applied to ticTacToeGrid. The grid is set to have 3 columns and 3 rows.
    ticTacToeGrid.style.gridTemplateColumns = "auto auto auto"; // 
    ticTacToeGrid.style.gridTemplateRows = "auto auto auto"; // Set 

    // Loop runs 9 times to create 9 squares for the 3 X 3 grid
    for (let i = 0; i < 9; i++) {
        // Create a div
        const div = document.createElement("div");
        // Add empty class
        div.classList.add('empty');
        // Add square class
        div.classList.add('square');
        
        // give div a event listener that when clicked checks if the div contains the class empty
        div.addEventListener('click', function() {
            if (div.classList.contains('empty')) {
                // if so it adds the current players symbol to the square
                div.textContent = currentPlayer;
                // remove the empty class bc its not empty anymore
                div.classList.remove('empty');
                // This  toggles the value of currentPlayer between 'X' and 'O' every time it is executed
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
        // Append div to grid
        ticTacToeGrid.append(div);
    }
    // Append grid to tic-tac-toe section
    ticTacToeSection.append(ticTacToeGrid);
}

makeBoard(); // Call makeBoard function


function makeMove() {
    // Check if the clicked square has the class empty
    if (clickedSquare.classList.contains('empty')) {
        // This  toggles the value of currentPlayer between 'X' and 'O' every time it is executed
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}



function reset() {
    // Select the tic-tac-toe section
    const ticTacToeSection = document.querySelector(".tic-tac-toe");

    // Remove all existing squares
    ticTacToeSection.innerHTML = '';

    // Call makeBoard to reset the board
    makeBoard();
}

// Add event listener to the reset button
const resetButton = document.querySelector("button");
resetButton.addEventListener("click", reset);