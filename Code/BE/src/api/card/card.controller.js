const cardService = require("./card.service");

const { httpResponse } = require("../../common/utils/http-response");

module.exports = {
	validateCard: async (req, res, next) => {
		try {
			const DTO = await cardService.validateCard(req.uid._id, next);

			DTO.statusCode === 200
				? httpResponse.sendSuccessful(res, DTO.returnValue, DTO.statusCode)
				: httpResponse.sendError(res, DTO.returnValue, DTO.statusCode);
		} catch (error) {
			next(error);
		}
	},

	createCard: async (req, res, next) => {
		try {
			const DTO = await cardService.createCard(req.body, req.uid._id, next);

			DTO.statusCode === 200
				? httpResponse.sendSuccessful(res, DTO.returnValue, DTO.statusCode)
				: httpResponse.sendError(res, DTO.returnValue, DTO.statusCode);
		} catch (error) {
			next(error);
		}
	},
};
