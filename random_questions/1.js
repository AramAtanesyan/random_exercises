/*
* hashvel ughankyan ankyuagci zugaher gceri gumary, aysinqn voch te ankyunagci, ayl ira koghqi 2 gceri gumary;
*
* the author of question is Aram Asatryan from Web Foundation
* */

const printTheMatrix = arr => {
sdfsdf
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            document.write(arr[i][j] + ' ');
        }
        document.write('<br />');
    }
}


const countTheSum = arr => {
    let sumOfFirstLine = 0;
    let sumOfSecondLine = 0;

    for(let i = 0, j = 1; i < arr.length; i++, j++) {
        let elementOfFirstLine = arr[i][i + 1];
        let elementOfSecondLine = arr[j] ? arr[j][i] : 0;

        if(elementOfFirstLine) {
            sumOfFirstLine += elementOfFirstLine;
        }
        if(elementOfSecondLine) {
            sumOfSecondLine += elementOfSecondLine;
        }
    }
    return sumOfSecondLine + sumOfFirstLine;
}

dsfsdf
console.log(countTheSum([
    [1,   2,  3 ],
    [6,   7,  3 ],
    [11,  12, 3 ],
    [16,  17, 3 ],
    [21,  22, 3 ],
    [24,  23, 3 ]
]));