const board = document.querySelector('[data-board]');
const cellElements = document.querySelectorAll('[data-cell]');
const winningMessage = document.querySelector('[winning-menssage-text]');

let isCircleTurn;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const startGame = () => {
    for (cell of cellElements) {
    cell.addEventListener('click', handleClick, {once : true});
    };
    
    isCircleTurn = false;

    board.classList.add("x");
}

const checkForWin = (currentPlayer) => {
    return winningCombinations.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const swapTurns = () => {
    isCircleTurn = !isCircleTurn;

    board.classList.remove('circle');
    board.classList.remove('x');

    if( isCircleTurn ) {
        board.classList.add("circle");
    } else {
        board.classList.add("x");
    };
};

const handleClick = (e) => {
    const cell = e.target;
    const classToAdd = isCircleTurn ? 'circle' : 'x';

    placeMark(cell, classToAdd);

    swapTurns();

    const isWin = checkForWin(classToAdd);

};

startGame()