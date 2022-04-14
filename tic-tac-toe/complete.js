const isHorizontalRowCompleted = row => {
    let allColumnsOfRow = row.querySelectorAll('td');

    return allElementsAreTheSame(allColumnsOfRow);
}

const isVerticalRowCompleted = square => {
    let indexOfSquare = square.getAttribute('data-square-index');
    let allColumnsOfVerticalRow = table.querySelectorAll(`td[data-square-index="${indexOfSquare}"]`);

    return allElementsAreTheSame(allColumnsOfVerticalRow);
}

const isDiagonalCompleted = () => {
    let [leftDiagonal, rightDiagonal] = getAllElementsOfDiagonal();


    return allElementsAreTheSame(leftDiagonal) || allElementsAreTheSame(rightDiagonal);


}