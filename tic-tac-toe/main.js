
function makeBoard() {
    const main = document.querySelector("main");

    // Remove existing squares
    main.innerHTML = "";

    // Generate 3x3 board
    for (let i = 0; i < 9; i++) {
      const div = document.createElement("div");
      div.classList.add("square", "empty");
      div.addEventListener("click", makeMove);
      main.append(div);
    }
  }