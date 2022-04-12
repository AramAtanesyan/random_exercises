/*Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: ‘a’ и ‘A’ разные символы.*/

const isUnique = str => {
    let objectWithOnlyKeys = {};
    for(let i = 0; i < str.length; i++) {
        if(objectWithOnlyKeys.hasOwnProperty(str[i])) {
            return false;
        }
        objectWithOnlyKeys[str[i]] = 1;
    }
    return true;
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false