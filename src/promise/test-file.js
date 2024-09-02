const { readFileAsArray } = require('./file');

readFileAsArray('./numbers.txt').then((lines) => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(n => n % 2 === 1);
    console.log('Odd numbers count:', oddNumbers.length);
});
