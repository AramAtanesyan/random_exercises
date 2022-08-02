function getFactorial(num) {
    let result = num;
    while(--num !== 1) {
        result *= num;
    }
    return result;
}


console.log(getFactorial(5));