const fs = require('node:fs');
const { EventEmitter } = require('node:events');

class TimeLogEmitter extends EventEmitter {
    execute(asyncFunc, ...args) {
        this.emit('begin');
        console.time('execute');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }

            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const timeLogEmitter = new TimeLogEmitter();

timeLogEmitter.on('begin', () => console.log('About to execute'));
timeLogEmitter.on('end', () => console.log('Done with execute'));

timeLogEmitter.on('data', (data) => {
    const numbers = data.toString().trim().split('\n');
    const oddNumbers = numbers.map(Number).filter((n) => n % 2 === 1);
    console.log('Odd numbers count:', oddNumbers.length);
});

timeLogEmitter.execute(fs.readFile, './numbers.txt', () => {
    throw new Error('Something went wrong');
});
