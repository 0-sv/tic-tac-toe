const gameBoard = (() => {
    const gameBoard = [];
    let dimension = 3;

    const setDimension = (newDimension) => dimension = newDimension;
    
    const get = () => gameBoard;

    const getDimension = () => dimension;

    const create = () => {
        const row = [];
        for (let i = 0; i < dimension; ++i) {
            row.push("_")
        };
        for (let i = 0; i < dimension; ++i) {
            gameBoard.push(row);
        };
    };

    return { create, getDimension, get, setDimension };

})();

const displayController = (() => {
    const main = document.querySelector("#main");

    const set = () => {
        for (let i = 0; i < gameBoard.getDimension(); ++i) {
            for (let j = 0; j < gameBoard.getDimension(); ++j) {
                const nought = document.createElement("div");
                nought.className = i.toString() + " " + j.toString();
                nought.innerHTML = gameBoard.get()[i][j];
                main.appendChild(nought);
            }
        }
    };  

    const create = (dimension) => {
        main.innerHTML = "";
        gameBoard.setDimension(dimension);
        gameBoard.create();
        set();
    };

    return { create };
})();