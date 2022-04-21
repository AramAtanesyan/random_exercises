function firstNonRepeatingCharacter(str) {

    let obj = str.split('').reduce(function (aggr, val) {
        if(!aggr[val]) {
            aggr[val] = true;
        } else {
            delete aggr[val];
        }
        return aggr;
    }, {})

    return Object.keys(obj)[0];

}

console.log(firstNonRepeatingCharacter('asodfasdfqwwrqo'));