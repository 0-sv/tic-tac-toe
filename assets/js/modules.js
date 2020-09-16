const gameBoard = (() => {
    const gameBoard = new Array();
    const dimension = 3;

    const get = () => gameBoard;

    const getDimension = () => dimension;

    const create = () => {
        for (let i = 0; i < dimension; i++)
            gameBoard[i] = new Array('', '', '');
    };

    const move = (coordinates, piece) => {
        const xy = coordinates.split(".").map(x=>+x);
        gameBoard[xy[0]][xy[1]] = piece;
    }

    // const isFinished = () => {
        
    // }

    // const setFirstPlayer = () => {

    // }

    return { move, create, getDimension, get };

})();

const displayController = (() => {
    const main = document.querySelector("#game-window");

    const renderGameBoardHTML = () => {
        gameBoard.create();
        main.innerHTML = "";
        for (let i = 0; i < gameBoard.getDimension(); ++i) {
            for (let j = 0; j < gameBoard.getDimension(); ++j) {
                const nought = document.createElement("div");
                nought.className = "square" 
                nought.id = i.toString() + "." + j.toString();
                nought.innerHTML = gameBoard.get()[i][j];
                main.appendChild(nought);
            }
        }
    };  

    return { renderGameBoardHTML };
})();