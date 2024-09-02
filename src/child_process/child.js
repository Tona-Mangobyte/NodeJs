process.on('message', msg => {
    console.log('Message from parent:', msg);
    process.send({ reply: 'world' });
});

let counter = 0;

setInterval(() => {
    process.send({ counter: counter++ });
}, 1000);
