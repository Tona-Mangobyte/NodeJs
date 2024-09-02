const { readFileAsArrayPromise } = require('../callback/file');

async function countOdd () {
    try {
        const lines = await readFileAsArrayPromise('./numbers.txt');
        const numbers = lines.map(Number);
        const oddCount = numbers.filter(n => n%2 === 1).length;
        console.log('Odd numbers count:', oddCount);
    } catch(err) {
        // Do something with err
    }
}

countOdd();
