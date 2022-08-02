//find out, is string a pangram , and set the string , where 0 is not pangram and 1 is pangram

function isPangram(pangram) {
    const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
    for(let i = 0; i < pangram.length; i++) {
        let isFound = true;
        for(let j = 0; j < allLetters.length; j++) {
            if(pangram[i].indexOf(allLetters[j]) === -1) {
                result += '0';
                isFound = false;
                break;
            }
        }
        if(isFound) {
            result += '1';
        }
        
    }

   return result;

}

console.log(isPangram(['abcdeh', 'The quick brown fox jumps over the lazy dog', 'abcdef', 'bcdaef', 'zbcdef', 'defbca', 'defbcz']));