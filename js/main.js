const gameBoard = (() => {
    const gameBoard = [];
    let dimension = 3;

    const setDimension = (newDimension) => dimension = newDimension;

    const get = () => gameBoard;

    const create = () => {
        const row = [];
        for (let i = 0; i < dimension; ++i) {
            row.push("_")
        };
        for (let i = 0; i < dimension; ++i) {
            gameBoard.push(row);
        };
    };

    return { create, get, setDimension };

})();

const displayController = (() => {
    const main = document.querySelector("#main");
    main.appendChild(set());

    const set = () => {
        const frame = document.createElement("div");
        frame.appendChild();

        return frame;
    };  

    const create = (dimension) => {
        main.innerHTML = "";
        gameBoard.setDimension(dimension);
        gameBoard.create();
        main.appendChild(set());
    };

    return { create };
})();