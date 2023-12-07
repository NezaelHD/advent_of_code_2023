let fs = require('fs');

let input = fs.readFileSync('inputs/input_day_2.txt', 'utf8').toString().split('\n');
let result = 0;

input.forEach(element => {
    const [gameId, sets] = element.replace('Game ', '').split(': ');
    const gameResult = { 'red': 0, 'green': 0, 'blue': 0 };
    sets.split('; ').forEach(set => {
        set.split(', ').forEach(value => {
            const [amount, color] = value.split(' ');
            if(gameResult[color] < Number(amount)) {
                gameResult[color] = Number(amount);
            }
        });
    });
    result += (gameResult['red'] * gameResult['green'] * gameResult['blue']);
});

console.log(result);