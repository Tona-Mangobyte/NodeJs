const { spawn } = require('node:child_process');

const child = spawn('node', [require.resolve('./timer')], {
    detached: true,
    stdio: 'ignore'
});

child.unref();
