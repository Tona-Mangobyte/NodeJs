const { readFileAsArrayPromise } = require('../callback/file');

readFileAsArrayPromise('./numbers.txt')
    .then(
        (lines) => {
            const numbers = lines.map(Number);
            const oddNumbers = numbers.filter(n => n%2 === 1);
            console.log('Odd numbers count:', oddNumbers.length);
        }
    )
    .catch(
        (err) => console.error(err)
    );

readFileAsArrayPromise('./numbers.txt')
    .then((lines) => lines.map(Number))
    .then((numbers) => numbers.filter(n => n%2 === 1))
    .then((oddNumbers) => console.log('Odd numbers count:', oddNumbers.length))
    .catch(
        (err) => console.error(err)
    );
