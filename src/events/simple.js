const events = require('node:events');

const myEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function (data) {
    console.log('I hear a scream!');
    console.log(data);
}

//Assign the event handler to an event:
myEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
myEmitter.emit('scream', 'Hello World!');
