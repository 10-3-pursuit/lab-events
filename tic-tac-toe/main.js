const board = document.querySelector(".tic-tac-toe");

const makeBoard = () =>{
    for(let i = 0; i < 9;i++){
        const div = document.createElement("div");
        div.classList.add("square", "empty");
        board.append(div)
    }
}

window.addEventListener("load",() =>{
    makeBoard()
    const squares = document.querySelectorAll(".square")
    let currentMove = "x"
    const makeMove = (event) =>{
        const square = event.target
        if(square.classList.contains("empty")){
            square.textContent = currentMove;
            square.classList.remove("empty")
            currentMove = currentMove === "x" ? "o":"x"
        }
    
       
    }

    const gameOver = () =>{
        const emptySquares = document.querySelectorAll(".empty");
        if(emptySquares.length === 0){
            alert("Game over!")
        }
    }

    const winnerCheck = () =>{
        const winningPositions = [
            [squares[0],squares[1],squares[2]],
            [squares[3],squares[4],squares[5]],
            [squares[6],squares[7],squares[8]],
            [squares[0],squares[3],squares[6]],
            [squares[1],squares[4],squares[7]],
            [squares[2],squares[5],squares[8]],
            [squares[0],squares[4],squares[8]],
            [squares[2],squares[4],squares[6]]
        ]
        const winnerFound = winningPositions.some(position=>{
            if(position.every(square=> square.textContent === "x")){
                return true
            }else if(position.every(square => square.textContent === "o")){
                return true
            }else{
                return false
            }
        })
        if(winnerFound){
            alert("We have a winner!")
            for(let square of squares){
                square.classList.remove("empty")
            }
            return winnerFound
        }
    }

    for(let square of squares){
        square.addEventListener("click",makeMove)
        
        const winnerFound = square.addEventListener("click",winnerCheck)

        if(winnerFound){
            alert("We have a winner!")
        }
        
        
        
        square.addEventListener("click",gameOver)
    }

    const resetButton = document.querySelector("button");
    
    resetButton.addEventListener("click", () => {
        for(let square of squares){
            square.textContent = ''
            square.classList.add("empty")
        }
    })
    
});
