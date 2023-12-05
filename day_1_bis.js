let fs = require('fs');

let input = fs.readFileSync('./input_day1_bis.txt', 'utf8').toString().split('\n');
let result = 0;
let literralNumber = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four' : 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9
}

let checkNumber = function (value) {
    return !Number.isNaN(Number(value));
}

input.forEach((item, key) => {
    let newLine = item;
    for (const [key, value] of Object.entries(literralNumber)) {
        newLine = newLine.replace(key, value);
    }
    console.log(newLine)
    let chars = item.replace().split('');
    let first = chars.find((char) => checkNumber(char))
    let last = chars.reverse().find((char) => checkNumber(char));
    result += Number(first + last);
});

console.log(result)

