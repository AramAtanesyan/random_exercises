/*Напишите функцию, которая принимает отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть -1.*/


function binarySearch(array, target) {

    let startIndex = 0;
    let endIndex = array.length - 1;

    while(true) {
        if(target === array[startIndex]) return startIndex
        else if(target === array[endIndex]) return endIndex
        else if(endIndex - startIndex <= 1) return -1

        let theMiddleIndex = Math.floor((startIndex + endIndex) / 2);

        if(array[theMiddleIndex] < target) {
            startIndex = theMiddleIndex + 1;
        } else if(array[theMiddleIndex] > target) {
            endIndex = theMiddleIndex - 1;
        } else {
            return theMiddleIndex;
        }
    }
}



console.log(binarySearch([1, 3, 5, 6, 7, 13, 17], 3))
console.log(binarySearch([1, 3, 6, 13, 17], 2))






