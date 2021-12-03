const Book = require("../../models/book");
const { httpStatus } = require("../../common/utils/http-status");
const { serviceReturn } = require("../../common/services/service-return");

module.exports = {
	getAllBooks: async (query, next) => {
		try {
			const books = await Book.find({});

			if (books) {
				return serviceReturn(books, httpStatus.OK);
			}

			return serviceReturn(
				"Cannot get all books",
				httpStatus.INTERNAL_SERVER_ERROR
			);
		} catch (error) {
			next(error);
		}
	},
};
