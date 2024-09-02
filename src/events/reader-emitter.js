const fs = require('node:fs');
const { EventEmitter } = require('node:events');

class ReaderEmitter extends EventEmitter {
    readFileAsArray(file) {
        fs.readFile(file, (err, data) => {
            if (err) {
                this.emit('error', err);
                return;
            }
            const lines = data.toString().trim().split('\n');
            this.emit('data', lines);
        });
    }
}

const reader = new ReaderEmitter();

reader.on('data', (lines) => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter((n) => n % 2 === 1);
    console.log('Odd numbers count: ', oddNumbers.length);
});

reader.on('error', (err) => {
    throw err;
});

reader.readFileAsArray('./numbers.txt');
