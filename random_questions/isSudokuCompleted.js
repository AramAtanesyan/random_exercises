/*
* exercise from testGorilla
* need to return is finished if the sudoku board is completed correctly, or 
* try again if no
* */


function isSudokuCompleted( board ) {

    if(board.length !== 9) return notFinishedYet();

    let regions = [[], [], [], [], [], [], [], [], []];

	for(let i = 0; i < board.length; i++) {
        
        if(board[i].length !== 9 || !areItemsUnique(board[i])) {
            return notFinishedYet();
        }

        let column = []
        for(let j = 0; j < board[i].length; j++) {
            let wichRegion = getWichRegionShouldNumberBeAdded(i, j);
            regions[wichRegion].push(board[j][i])
            column.push(board[j][i])
        }

        if(column.length !== 9 || !areItemsUnique(column)) {
            return notFinishedYet();
        }
        
    } 

    if(regions.every(areItemsUnique)) {
        return successfullyFinished();
    }


    return notFinishedYet()
}


function getWichRegionShouldNumberBeAdded(i, j) {
    switch(true) {
        case i < 3 && j < 3 : return 0;
        case i < 3 && j < 6 : return 1;
        case i < 3: return 2;

        case i < 6 && j < 3 : return 3;
        case i < 6 && j < 6 : return 4;
        case i < 6: return 5;

        case j < 3 : return 6;
        case j < 6 : return 7;
        default : return 8;
    }
}

function successfullyFinished() {
    return 'finished';
}

function notFinishedYet() {
    return 'try again';
}

function areItemsUnique(items) {
    return items.filter((item, index) => items.indexOf(item) === index).length === items.length
}


console.log(isSudokuCompleted(
            [
                [2, 3, 7, 8, 4, 1, 5, 6, 9], 
                [1, 8, 6, 7, 9, 5, 2, 4, 3], 
                [5, 9, 4, 3, 2, 6, 7, 1, 8], 
                [3, 1, 5, 6, 7, 4, 8, 9, 2], 
                [4, 6, 9, 5, 8, 2, 1, 3, 7], 
                [7, 2, 8, 1, 3, 9, 4, 5, 6], 
                [6, 4, 2, 9, 1, 8, 3, 7, 5], 
                [8, 5, 3, 4, 6, 7, 9, 2, 1], 
                [9, 7, 1, 2, 5, 3, 6, 8, 4], 
]))

console.log(isSudokuCompleted(
            [
                [3, 8, 7, 4, 9, 1, 6, 2, 5], 
                [2, 4, 1, 5, 6, 8, 3, 7, 9], 
                [5, 6, 9, 3, 2, 7, 4, 1, 8], 
                [7, 5, 8, 6, 1, 9, 2, 3, 4], 
                [1, 2, 3, 7, 8, 4, 5, 9, 6], 
                [4, 9, 6, 2, 5, 3, 1, 8, 7], 
                [9, 3, 4, 1, 7, 6, 8, 5, 2], 
                [6, 7, 5, 8, 3, 2, 9, 4, 1], 
                [8, 1, 2, 9, 4, 5, 7, 6, 3], 
                
]))