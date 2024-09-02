const { readFileAsArray, fileSize } = require('./file');

/*readFileAsArray('./numbers.txt', (err, lines) => {
    if (err) throw err;
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(n => n % 2 === 1);
    console.log('Odd numbers count:', oddNumbers.length);
});*/

const callback = (err, data) => {
    if (err) throw err;
    const numbers = data.map(Number);
    const oddNumbers = numbers.filter(n => n % 2 === 1);
    console.log('Odd numbers count:', oddNumbers.length);
}
readFileAsArray('./numbers.txt', callback);

fileSize('./numbers.txt', (err, size) => {
    if (err) throw err;
    console.log('File size:', size);
});
