class ApiError extends Error {
    constructor(
        message = "Something went wrong.",
        code = 500,
        errors = [],
        statck = "",
        statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.errors = errors;
        // this.stack = statck;
        // this.message = message;
        this.name = this.constructor.name;
        this.success = false;

        if (statck) {
            this.stack = statck;
            this.message = message;

        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}


export default ApiError;