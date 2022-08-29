const startGameBtn = document.getElementById('start')

const numberToGuess = generateRandomNumber();
let isCompleted = false;
function generateRandomNumber() {
    const numberToGuess = [];
    while(numberToGuess.length < 4) {
        let char = Math.floor(Math.random() * 10) + '';
        if(!numberToGuess.includes(char)) {
            numberToGuess.push(char);
        }
    }
    return numberToGuess;
}



while(!isCompleted) {
    let res = getResponseForTheCowsAndBullsGame(prompt('your number'))
    if(res.completed) {
        isCompleted = true;
    }
}



function getResponseForTheCowsAndBullsGame(inputNumber) {
    inputNumber += '';
    let res = {};
    for(let i = 0; i < inputNumber.length; i++) {
        if(numberToGuess.includes(inputNumber[i])) {
            if(numberToGuess.indexOf(inputNumber[i]) === i) {
                res.bools ? res.bools++ : res.bools = 1;
            } else {
                res.cows ? res.cows++ : res.cows = 1;
            }
        }
    }
    res.completed = res.bools === 4;
    return res;
}


