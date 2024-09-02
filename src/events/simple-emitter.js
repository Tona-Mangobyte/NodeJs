const { EventEmitter } = require('node:events');

class MyEmitter extends EventEmitter {
    // Custom logic for all event emitter objects
}

const myEmitter = new MyEmitter();

myEmitter.on('something-happened', (data) => {
    // Do something with data
    console.log(data);
});

myEmitter.emit('something-happened', { data: 'This is some data' });


