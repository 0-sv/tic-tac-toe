document.getElementById("new-game").addEventListener("click", (e) => {
    displayController.renderGameBoardHTML();
    const firstPlayerPiece = document.getElementById("player-select-x").checked === true ? "x" : "o";
    document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("click", (e) => {
            gameBoard.move(e.target.id, firstPlayerPiece);
            e.target.innerHTML = firstPlayerPiece;
        });
    });
});