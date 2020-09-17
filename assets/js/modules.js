const gameBoard = (() => {
    const gameBoard = new Array();
    const dimension = 3;
    const emptySquare = '';

    const get = () => gameBoard;

    const getDimension = () => dimension;

    const create = () => {
        for (let i = 0; i < dimension; i++)
            gameBoard[i] = new Array(emptySquare, emptySquare, emptySquare);
    };

    function transpose(matrix) {
        return matrix[0].map((col, i) => matrix.map(row => row[i]));
    };

    function allEqual(arr, piece) {
        set = new Set(arr);
        if (set.size === 1) return set.has(piece) ? true : false;
        else return false;
    };

    const pieceWins = (piece) => {
        const transposedGameBoard = transpose(gameBoard);
        for (let i = 0; i < dimension; ++i) {
            if (allEqual(gameBoard[i], piece)) return true;
            if (allEqual(transposedGameBoard[i], piece)) return true;
        }
        
        if (allEqual(new Array(gameBoard[0][0],
            gameBoard[1][1],
            gameBoard[2][2]), piece)) return true;

        if (allEqual(new Array(transposedGameBoard[0][0],
            transposedGameBoard[1][1],
            transposedGameBoard[2][2]), piece)) return true;
        
        return false;
    };

    const gameTies = () => {
        return !(new Set([].concat.apply([], gameBoard)).has(emptySquare));
    };

    const boardIsEmpty = () => {
        return (Array.isArray(gameBoard) 
            && !gameBoard.length) 
            || new Set([].concat.apply([], gameBoard)).has(emptySquare);
    }

    const gameResult = () => {
        if (pieceWins("x")) return "x";
        else if (pieceWins("o")) return "o";
        else if (gameTies()) return "tie";
        else return "diagonal";
    };

    const move = (coordinates, piece) => {
        const xy = coordinates.split(".").map(x=>+x);
        gameBoard[xy[0]][xy[1]] = piece;
    };

    return { move, gameResult, create, getDimension, get };

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

    const hideMenuHTML = () => {
        document.querySelector("form").innerHTML = "";
    }

    return { hideMenuHTML, renderGameBoardHTML };
})();