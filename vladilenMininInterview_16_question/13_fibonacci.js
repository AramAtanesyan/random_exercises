/*Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны n, которую передали как аргумент.*/

function fibonacci(n) {
    const res = [1, 1];
    if(n < 3) {
        return res.slice(0, n)
    }


    while(res.length < n) {
        res.push(res[res.length - 1] + res[res.length - 2]);
    }
    return res;
}

console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]