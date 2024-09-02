const { readFile } = require('node:fs/promises');

// Node built-in promise-based API
const readFileAsArray = async (file) => {
    const data = await readFile(file, 'utf8');
    const lines = data.trim().split('\n');
    return lines;
};

module.exports = { readFileAsArray };
