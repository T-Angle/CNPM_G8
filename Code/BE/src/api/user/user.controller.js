const userService = require("./user.service");

const { httpResponse } = require("../../common/utils/http-response");

module.exports = {
	getUser: async (req, res, next) => {
		try {
			const DTO = await userService.getUser(req.uid._id);

			DTO.statusCode === 200
				? httpResponse.sendSuccessful(res, DTO.returnValue, DTO.statusCode)
				: httpResponse.sendError(res, DTO.returnValue, DTO.statusCode);
		} catch (error) {
			next(error);
		}
	},
};
