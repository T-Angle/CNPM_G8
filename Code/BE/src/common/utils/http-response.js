module.exports.httpResponse = {
	sendError: (res, msg = "", statusCode) => {
		res.json({
			msg,
			statusCode,
		});
	},
	sendSuccessful: (res, data, statusCode = 200) => {
		if (!data) {
			data = {};
		}

		res.json({
			data,
			statusCode,
		});
	},
};
