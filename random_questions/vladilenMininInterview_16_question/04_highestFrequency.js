/*Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.*/

function highestFrequency(array) {
    let counterOfKeys = {};

    for(let i = 0; i < array.length; i++) {
        if(!counterOfKeys.hasOwnProperty(array[i])) {
            counterOfKeys[array[i]] = 0;
        }
        counterOfKeys[array[i]] ++;
    }

    return Object.keys(counterOfKeys).reduce((acc, val) => {
        return counterOfKeys[acc] >= counterOfKeys[val] ? acc : val;
    })


}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc