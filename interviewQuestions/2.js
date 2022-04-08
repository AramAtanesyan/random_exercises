/*
* find the point of the greatest digit of the number. (ie 123 => 3, 132 => 30, 321 => 300),
* if there are two of the same digit , return the smallest one;
*
* miavory , aysinqn taserordakan , haryurerordakan, hazarerordakan ev ayln
*
* the author of question is Aram Asatryan from Web Foundation
* */


const getNumPos = num => {
    let greatestDigit = getGreatestNum(num);
    let revertedString = reversedString(num);
    let indexOfGreatestDigit = +(revertedString.indexOf(greatestDigit + '')) + 1;
    return getThePointOfNum(indexOfGreatestDigit) * greatestDigit;
}


const getGreatestNum = num => {
    let numAsArray = Array.from(String(num), num => Number(num));
    return numAsArray.reduce((acc, v, i) => {
        return acc > v ? acc : v;
    })
}

const reversedString = str => {
    return (str + '').split('').reverse().join('') + '';
}


const getThePointOfNum = num => {
    let res = '1';
    for (let i = 1; i < num; i++) {
        res += '0';
    }
    return +res;

}

console.log(getNumPos(123));