const countOfColumns = +(prompt('How many columns do you want?', '3'));
const table = document.getElementById('board');
let isXFigure = true;
let countOfXFigureSteps = 0;
let countOfZeroFigureSteps = 0;

const isWin = (square) => {

    //todo: need to fix this part
    if ((!isXFigure && countOfZeroFigureSteps < countOfColumns) || countOfXFigureSteps < countOfColumns) {
        return false;
    }

    let row = square.closest('tr');
    if (isHorizontalRowCompleted(row) || isVerticalRowCompleted(square) || isDiagonalCompleted(square)) {
        return true;
    }
}

const handleClickEvent = evt => {
    const square = evt.target.closest('td');
    if (square.innerHTML) {
        return;
    }
    let figureType = isXFigure ? 'x' : 'o';


    if (isXFigure) {
        square.appendChild(createXSign());
        countOfXFigureSteps++;
    } else {
        square.appendChild(createZeroSign());
        countOfZeroFigureSteps++;
    }
    square.setAttribute('data-figure-type', figureType);


    if (isWin(square)) {
        table.removeEventListener('click', handleClickEvent);
        console.log(`The Winner is ${isXFigure ? 'X' : 'O'}`);
    }

    isXFigure = !isXFigure;
}


const startTheGame = () => {
    table.addEventListener('click', handleClickEvent)
}

if (countOfColumns > 2) {
    drawTheGameField(countOfColumns);
    startTheGame();
} else {
    alert('Please insert the positive number!');
}

