const paymentService = require("./payment.service");

const { httpResponse } = require("../../common/utils/http-response");

module.exports = {
	paid: async (req, res, next) => {
		try {
			const DTO = await paymentService.paid(req.uid._id, req.body.price, next);

			DTO.statusCode === 200
				? httpResponse.sendSuccessful(res, DTO.returnValue, DTO.statusCode)
				: httpResponse.sendError(res, DTO.returnValue, DTO.statusCode);
		} catch (error) {
			next(error);
		}
	},

	deposit: async (req, res, next) => {
		try {
			const DTO = await paymentService.deposit(
				req.uid._id,
				req.body.deposit,
				next
			);

			DTO.statusCode === 200
				? httpResponse.sendSuccessful(res, DTO.returnValue, DTO.statusCode)
				: httpResponse.sendError(res, DTO.returnValue, DTO.statusCode);
		} catch (error) {
			next(error);
		}
	},

	paymentHistory: async (req, res, next) => {
		try {
			const DTO = await paymentService.paymentHistory(req.uid._id);

			DTO.statusCode === 200
				? httpResponse.sendSuccessful(res, DTO.returnValue, DTO.statusCode)
				: httpResponse.sendError(res, DTO.returnValue, DTO.statusCode);
		} catch (error) {
			next(error);
		}
	},
};
