/*
* need to leave only unique fruits, and sort them;
*
* the author is https://www.youtube.com/watch?v=HCXDrVikPGk
*
* */

const fruits = ['banana', 'apple', 'orange', 'apple', 'grapefruit', 'peach', 'banana', 'apple', 'banana', 'cherry', 'peach', 'cherry'];


const fruitsSorter = fruits => {

    const obj = {}
    fruits.forEach(fruit => {
        if (!obj.hasOwnProperty(fruit)) {
            obj[fruit] = 0;
        }
        obj[fruit]++;
    })
    return Object.keys(obj).sort((a, b) => {
        return obj[a] > obj[b] ? 1 : -1;
    })

    //method 2

    /*return fruits.filter((fruit, index) => {
        if(!obj.hasOwnProperty(fruit)) {
            obj[fruit] = 0;
        }
        obj[fruit]++;

        return fruits.indexOf(fruit) === index;
    }).sort((a, b) => {
        return obj[a] > obj[b] ? 1 : -1;
    })*/
}


fruitsSorter(fruits)