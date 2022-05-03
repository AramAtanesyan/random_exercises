/*given by Khanoyan Hayk from Web Foundation
need to bring to the line start the lower case symbols and number symbols
given 'AsAsAs1A1' should return 'sss11AAAA'
*/


function unshiftLowerCaseAndNumbers(string) {
    let res = [];

    for(let i = 0; i < string.length; i++) {
        if(isLowerCaseOrNumber(string[i])) {
            res.push(string[i]);
            string = string.replace(string[i], '');
            i--;
        }

    }
    return res.join('') + string;
}

function isLowerCaseOrNumber(symbol) {
    return symbol.toLowerCase() === symbol || typeof symbol === 'number';
}

console.log(unshiftLowerCaseAndNumbers('AsAsAs1A1'));
