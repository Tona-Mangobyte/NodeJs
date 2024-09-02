const fs = require('node:fs');

const readFileAsArray = function(file, cb) {
    fs.readFile(file, function(err, data) {
        if (err) {
            return cb(err);
        }
        const lines = data.toString().trim().split('\n');
        cb(null, lines);
    });
};

function fileSize (fileName, cb) {
    if (typeof fileName !== 'string') {
        return cb(new TypeError('argument should be string')); // Sync
    }
    fs.stat(fileName, (err, stats) => {
        if (err) { return cb(err); } // Async
        cb(null, stats.size); // Async
    });
}

// Making a callback function support promises
const readFileAsArrayPromise = function (file, cb = () => {}) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function (err, data) {
            if (err) {
                reject(err);
                return cb(err);
            }
            const lines = data.toString().trim().split('\n');
            resolve(lines);
            cb(null, lines);
        });
    });
};

module.exports = { readFileAsArray, fileSize, readFileAsArrayPromise };
