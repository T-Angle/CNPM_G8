const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
	userId: {
		type: mongoose.ObjectId,
		unique: true,
	},
	cardId: {
		type: String,
		default: "1111 2222 3333 4444",
	},
	expired: {
		type: Date,
	},
	credit: {
		type: Number,
		default: 200000,
	},
});

const Card = mongoose.model("Card", CardSchema, "cards");

module.exports = Card;
