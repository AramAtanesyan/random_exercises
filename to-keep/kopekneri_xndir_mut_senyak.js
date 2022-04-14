let countOfZeros;

const getFilledArray = function (number) {
    const resAr = new Array(number);
    resAr.fill(1);
    countOfZeros = number / 10;

    let alreadyPushedIndexes = [];
    for (let i = 0; i < countOfZeros; i++) {
        let randomIndex = Math.floor(Math.random() * (number + 1));
        if (alreadyPushedIndexes.includes(randomIndex)) {
            i--;
            continue;
        }
        alreadyPushedIndexes.push(randomIndex);
        resAr[randomIndex] = 0;
    }
    return resAr;
}

const initialAr = getFilledArray(40);
console.log(initialAr)

let firstCollection = [];
let secondCollection = [];

for (let i = 0; i < initialAr.length; i++) {
    if (i < countOfZeros) {
        secondCollection.push(initialAr[i])
    } else {
        firstCollection.push(initialAr[i]);
    }
}

secondCollection = secondCollection.map(item => item === 1 ? 0 : 1);

console.log(firstCollection)
console.log(secondCollection)


