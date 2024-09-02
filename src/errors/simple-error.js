function calculateSquareRoot(number) {
    if (number < 0) {
        throw new Error(
            'Cannot calculate square root of negative number'
        );
    }

    return Math.sqrt(number);
}

calculateSquareRoot(-1); // Error: Cannot calculate square root of negative number
