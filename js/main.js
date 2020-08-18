const gameBoard = (() => {
    const gameBoard = [];
    let dimension = 3;

    const setDimension = (newDimension) => dimension = newDimension;

    const get = () => gameBoard;

    const create = () => {
        const row = [];
        for (let i = 0; i < dimension; ++i) {
            row.push(0)
        };
        for (let i = 0; i < dimension; ++i) {
            gameBoard.push(row);
        };
    };

    return { create, get, setDimension };

})();

const displayController = (() => {

})();