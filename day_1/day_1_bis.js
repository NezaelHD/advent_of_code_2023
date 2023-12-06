let fs = require('fs');

let input = fs.readFileSync('./inputs/input_day1_bis.txt', 'utf8').toString().split('\n');
let result = 0;
let litteralAssoc = {
    'one': 'o1e',
    'two': 't2o',
    'three': 't3e',
    'four' : 'f4r',
    'five' : 'f5e',
    'six' : 's6x',
    'seven' : 's7n',
    'eight' : 'e8t',
    'nine' : 'n9e'
}
let checkNumber = function (value) {
    return !Number.isNaN(Number(value));
}
input.forEach((item, key) => {
    let newLine = item;
    for (const [key, value] of Object.entries(litteralAssoc)) {
        newLine = newLine.replaceAll(key, value);
    }
    let chars = newLine.split('');
    let first = chars.find((char) => checkNumber(char))
    let last = chars.reverse().find((char) => checkNumber(char));
    result += Number(first + last);
});

console.log(result)

