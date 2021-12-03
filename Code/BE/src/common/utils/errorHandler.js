class AppError extends Error {
	constructor(statusCode, message, isOperation, type = undefined) {
		super();

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, AppError);
		}

		this.statusCode = statusCode;
		this.message = message;
		this.isOperation = isOperation;
		this.type = type;
	}
}

module.exports.AppError = AppError;
