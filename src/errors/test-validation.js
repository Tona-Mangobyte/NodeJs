const ValidationError = require('./validation-error');

function validateUser(user) {
    if (!user.username) {
        throw new ValidationError('Username is required', 'username');
    }
}

try {
    validateUser({}); // An empty object is not a valid user object
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Error in field '${error.fieldName}': ${error.message}`);
        // console.error(error);
    } else {
        console.error(`Unexpected error: ${error.message}`);
        throw error;
    }
}
