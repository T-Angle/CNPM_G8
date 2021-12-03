const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
	thumbnail: {
		type: String,
	},
	title: {
		type: String,
	},
	publisher: {
		type: String,
	},
	evaluation: {
		type: Number,
	},
	price: {
		type: String,
	},
});

const Book = mongoose.model("Book", BookSchema, "books");

module.exports = Book;
