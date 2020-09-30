document.getElementById("new-game").addEventListener("click", (e) => {
    gameBoard.create();
    displayController.renderGameBoardHTML();
    let pieceToPlay = document.getElementById("player-select-x").checked === true ? "x" : "o";
    displayController.hideMenuHTML();

    document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("click", (e) => {
            gameBoard.move(e.target.id, pieceToPlay);
            e.target.innerHTML = pieceToPlay;

            if (pieceToPlay === "x") pieceToPlay = "o";
            else pieceToPlay = "x";

            if (gameBoard.gameResult() !== "continue") {
                displayController.renderOutcomeHTML();
            } 
        });
    });
});