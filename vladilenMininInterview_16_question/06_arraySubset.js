/*Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом.*/


function arraySubset(source, subset) {
    if(subset.length > source.length) return false;

    for(let i = 0; i < subset.length; i++) {
        if(!source.includes(subset[i])) {
            return false;
        }
        source = removeItemFromArray(source, subset[i]);
    }
    return true;
}

function removeItemFromArray(ar, item) {
    let index = ar.indexOf(item);
    ar.splice(index, 1);
    return ar;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false