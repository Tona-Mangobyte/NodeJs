const simple = setTimeout(() => {
    // Keep the event loop busy
    console.log('Timer is running');
}, 20_000);

// This will keep the event loop busy
module.exports = simple;
