let fs = require('fs');

let input = fs.readFileSync('inputs/input_day_2.txt', 'utf8').toString().split('\n');
const availableCubes = {
    'red': 12,
    'green': 13,
    'blue': 14,
};

function compareObjects(toCompare, reference) {
    return Object.keys(toCompare).every(key => toCompare[key] <= reference[key]);
}

const games = input.map(element => {
    const [gameId, sets] = element.replace('Game ', '').split(': ');

    const isValid = sets.split('; ').every(set => {
        const gameResult = { 'red': 0, 'green': 0, 'blue': 0 };
        set.split(', ').forEach(value => {
            const [amount, color] = value.split(' ');
            gameResult[color] += Number(amount);
        });

        return compareObjects(gameResult, availableCubes);
    });

    return { gameId: Number(gameId), isValid };
});

const result = games.reduce((accumulator, currentValue) =>
    currentValue.isValid ? accumulator + currentValue.gameId : accumulator, 0);

console.log(result);