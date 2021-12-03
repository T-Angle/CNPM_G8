const authService = require("./authentication.service");

const { httpResponse } = require("../../common/utils/http-response");

module.exports = {
	register: async (req, res, next) => {
		try {
			const DTO = await authService.register(req.body, next);
			DTO.statusCode === 200
				? httpResponse.sendSuccessful(res, DTO.returnValue, DTO.statusCode)
				: httpResponse.sendError(res, DTO.returnValue, DTO.statusCode);
		} catch (error) {
			next(error);
		}
	},
	login: async (req, res, next) => {
		try {
			const DTO = await authService.login(req.body, res, next);

			DTO.statusCode === 200
				? httpResponse.sendSuccessful(res, DTO.returnValue, DTO.statusCode)
				: httpResponse.sendError(res, DTO.returnValue, DTO.statusCode);
		} catch (error) {
			next(error);
		}
	},
};
