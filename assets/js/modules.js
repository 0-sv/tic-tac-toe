const gameBoard = (() => {
    const gameBoard = [];
    let dimension = 3;

    const setDimension = (newDimension) => dimension = newDimension;
    
    const get = () => gameBoard;

    const getDimension = () => dimension;

    const create = () => {
        const row = [];
        for (let i = 0; i < dimension; ++i) {
            row.push(" ");
        };
        for (let i = 0; i < dimension; ++i) {
            gameBoard.push(row);
        };
    };

    return { create, getDimension, get, setDimension };

})();

const displayController = (() => {
    const main = document.querySelector("#game-window");

    const renderHTML = () => {
        gameBoard.create();
        for (let i = 0; i < gameBoard.getDimension(); ++i) {
            for (let j = 0; j < gameBoard.getDimension(); ++j) {
                const nought = document.createElement("div");
                nought.className = "square" + " " + i.toString() + " " + j.toString();
                nought.innerHTML = gameBoard.get()[i][j];
                main.appendChild(nought);
            }
        }
    };  

    return { renderHTML };
})();