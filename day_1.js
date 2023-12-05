let fs = require('fs');

let input = fs.readFileSync('./input_day1.txt', 'utf8').toString().split('\n');
let result = 0;

let checkNumber = function (value) {
    return !Number.isNaN(Number(value));
}

input.forEach((item, key) => {
    let chars = item.split('');
    let first = chars.find((char) => checkNumber(char))
    let last = chars.reverse().find((char) => checkNumber(char));
    result += Number(first + last);
});

console.log(result)

