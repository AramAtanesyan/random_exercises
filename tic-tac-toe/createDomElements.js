const createOneSquare = (columnIndex) => {
    const square = document.createElement('td');
    square.setAttribute('data-square-index', columnIndex + 1 + '');
    return square;
}


const createOneRow = (rowIndex) => {
    const row = document.createElement('tr');
    row.setAttribute('data-row-index', rowIndex + 1 + '');
    return row;
}


const createXSign = () => {
    const img = document.createElement('img');
    img.setAttribute('src', './images/x-sign.png');
    img.classList.add('x-sign', 'img');
    return img;
}

const createZeroSign = () => {
    const img = document.createElement('img');
    img.setAttribute('src', './images/zero-sign.png');
    img.classList.add('zero-sign', 'img');
    return img;
}

const drawTheGameField = count => {
    for(let i = 0; i < count; i++) {
        const row = createOneRow(i);

        for (let j = 0; j < count; j++) {
            let square = createOneSquare(j);
            square.setAttribute('data-row-index', i + 1 + '');
            row.appendChild(square)
        }
        table.appendChild(row);
    }
}