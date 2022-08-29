/*Напишите функцию, которая проверит строку на сбалансированность скобок: {}, (), []. Вернуть true если они сбалансированы, иначе false.*/



//todo: need to implement !!!!!!!!!!!!!!!!

function isBalanced(string) {
    let collectorOfParentheses = {
        '(' : 0,
        ')' : 0,
        '{' : 0,
        '}' : 0,
        '[' : 0,
        ']' : 0,


    };

    for(let i = 0; i < string.length;i++) {
        let char = string[i];
        collectorOfParentheses[char]++;

        if(collectorOfParentheses[")"] > collectorOfParentheses["("]) {
            return false;
        }
    }
    return collectorOfParentheses["("] === collectorOfParentheses[")"]
            && collectorOfParentheses["["] === collectorOfParentheses["]"]
            && collectorOfParentheses["{"] === collectorOfParentheses["}"];

}

console.log(isBalanced('(x + y) - (4)')) // -> true
// console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true

// console.log(isBalanced('[{([])}]')) // -> true

// console.log(isBalanced('(50)(')) // -> false
// console.log(isBalanced('[{]}')) // -> false