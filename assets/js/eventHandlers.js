document.getElementById("new-game").addEventListener("click", (e) => {
    displayController.renderGameBoardHTML();

    // Need: player1(name, piece), player2(name, piece), firstPlayer
    // const gamePlayerX = new gamePlayer("x");
    // const gameplayerO = new gamePlayer("o");
    document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("click", (e) => {
            gameBoard.move(e.target.id, "x");
            e.target.innerHTML = "x";
        });
    });
        // const firstPlayer = document.getElementById("#select-player");
        // firstPlayer.innerHTML === "x" ? gameBoard.move("x", this.id) : gameBoard.move("y", this.id);

        // while (!isFinished()) { gameBoard.move()}
});

