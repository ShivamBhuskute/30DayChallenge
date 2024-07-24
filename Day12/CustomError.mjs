class CustomError extends Error {
    constructor(message = "ERRORS") {
        super(message);
        this.message = message;
    }
}

export { CustomError };
