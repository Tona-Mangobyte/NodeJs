class ValidationError extends Error {
    constructor(message, fieldName) {
        super(message);
        this.name = 'ValidationError';
        this.fieldName = fieldName;
    }
}

module.exports = ValidationError;
