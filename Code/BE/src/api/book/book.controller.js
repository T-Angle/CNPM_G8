const BookService = require("./book.service");

const { httpResponse } = require("../../common/utils/http-response");

module.exports = {
	getAllBooks: async (req, res, next) => {
		try {
			const DTO = await BookService.getAllBooks(req.query, next);

			DTO.statusCode === 200
				? httpResponse.sendSuccessful(res, DTO.returnValue, DTO.statusCode)
				: httpResponse.sendError(res, DTO.returnValue, DTO.statusCode);
		} catch (error) {
			next(error);
		}
	},
};
