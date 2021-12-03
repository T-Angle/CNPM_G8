const { AppError } = require("../utils/errorHandler");
const { httpStatus } = require("../utils/http-status");

/** This method forms the return in every service layer
 *
 * @param {*} returnValue - (required) if error it will be the message, otherwise it will be data
 * @param {*} statusCode - (required) depends on http status code
 * @returns
 */

module.exports.serviceReturn = (returnValue, statusCode) => {
	if (!returnValue || !statusCode) {
		AppError(
			httpStatus.INTERNAL_SERVER_ERROR,
			"returnValue and statusCode is required"
		);
	}

	return { returnValue, statusCode };
};
