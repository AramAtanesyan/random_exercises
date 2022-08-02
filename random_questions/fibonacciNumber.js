function getFibNthNumber(n) {
    let num1 = 0;
    let num2 = 1;

    let res = 0;
    for(let i = 0; i < n; i++) {
        res = num1 + num2;
        let temp = num2;
        num2 = res;
        num1 = temp;
    }
    return res;
}