const number = '2085';

function getResponseForTheCowsAndBullsGame(inputNumber) {

    inputNumber += '';
    let res = {};
    for(let i = 0; i < inputNumber.length; i++) {
        if(number.includes(inputNumber[i])) {
            if(i === number.indexOf(inputNumber[i])) {
                res.bools ? res.bools++ : res.bools = 1;
            } else {
                res.cows ? res.cows++ : res.cows = 1;
            }
        }
    }
    return res;
}

console.log(getResponseForTheCowsAndBullsGame('8045'))