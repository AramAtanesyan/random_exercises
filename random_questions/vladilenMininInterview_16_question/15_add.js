/*Напишите функцию, которая складывает 2 числа. Работать функция должна как показано в примере ниже:*/

/*
* add(20, 22) // -> 42
add(20)(22) // -> 42
add(20)()(22) // -> 42
add(20)()()()(22) // -> 42
add(20)()()()()()()()()()()()(22) // -> 42
add()(20)(22) // -> 42
add()()()()(20)(22) // -> 42
add()(20)()(22) // -> 42
add()()()()()(20)()()()(22) // -> 42
* */




//todo: need to implement by myself !!!!!!!!!!!!

function add() {
    let a = arguments[0];
    let b = arguments[1];
    if(!b && a) {
        return function () {
            return add;
        }
    }
    if(b && !a) {
        return function () {
            return add;
        }
    }
    if(a && b) {
        return a + b;
    }

}

// console.log(add(20, 22)); // -> 42
// console.log(add(20)(22)); // -> 42

// console.log(add(20)()(22)); // -> 42
console.log(add()()(22)); // -> 42

// add(20)()()()(22) // -> 42
// add(20)()()()()()()()()()()()(22) // -> 42
// add()(20)(22) // -> 42
// add()()()()(20)(22) // -> 42
// add()(20)()(22) // -> 42
// add()()()()()(20)()()()(22) // -> 42