const getAllElementsOfDiagonal = () => {
    const diagonalColumnsFromLeft = [];
    const diagonalColumnsFromRight = [];

    for(let i = 1; i <= countOfColumns; i++) {
        let elementToAddToLeftCollection = table.querySelector(`td[data-row-index="${i}"][data-square-index="${i}"]`)
        diagonalColumnsFromLeft.push(elementToAddToLeftCollection)

        let colIndex = countOfColumns - i + 1;
        let elementToAddToRightCollection = table.querySelector(`td[data-row-index="${i}"][data-square-index="${colIndex}"]`)
        diagonalColumnsFromRight.push(elementToAddToRightCollection)
    }

    return [diagonalColumnsFromLeft, diagonalColumnsFromRight];
}


const blurElements = collection => {
    collection.forEach(el => {
        el.classList.add('winner-col');
    })
}

const allElementsAreTheSame = collectionOfSquares => {
    let signToFind = collectionOfSquares[0].getAttribute('data-figure-type');

    for(let i = 0; i < collectionOfSquares.length; i++) {
        let col = collectionOfSquares[i];
        let colSignTemp = col.getAttribute('data-figure-type');
        if(colSignTemp !== signToFind) {
            return false;
        }
    }

    blurElements(collectionOfSquares);
    return true;
}
