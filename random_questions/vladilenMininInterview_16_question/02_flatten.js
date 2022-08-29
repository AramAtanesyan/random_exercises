/*Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.*/

const resultAr = [];

function flatten(array) {
    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            flatten(array[i]);
        } else {
            resultAr.push(array[i])
        }
    }
    return resultAr;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]