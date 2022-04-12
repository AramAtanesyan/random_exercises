/*Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.

**Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.*/


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotateTo90(source) {
    let result = [];

    for(let i = 0; i < source.length; i++) {
        if(!Array.isArray(result[i])) {
            result[i] = [];
        }
        for(let j = 0; j < source[i].length; j++) {
            if(source[source.length - 1] && source[source.length - 1][j]) {
                result[i].push(source[source.length - j - 1][i])
            }
        }
    }

    return result;
}


function rotateTo180(source) {
    let result = [];

    for(let i = 0; i < source.length; i++) {
        if(!Array.isArray(result[i])) {
            result[i] = [];
        }
        for(let j = source[i].length - 1, k = 0; j >= 0; j--, k++) {
            if(source[source.length - 1] && source[source.length - 1][j]) {
                result[i].push(source[source.length - 1 - i][source.length - 1 - k])
            }
        }
    }

    return result;
}


const drawTheMatrix = ar => {
    for(let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar[i].length; j++) {
            document.write(ar[i][j])
        }
        document.write('<br />')
    }
}

drawTheMatrix(rotateTo180(matrix))