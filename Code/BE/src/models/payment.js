const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
	cardId: {
		type: mongoose.ObjectId,
	},
	date: {
		type: Date,
	},
	status: {
		type: String,
	},
	description: {
		type: String,
	},
});

const Payment = mongoose.model("Payment", PaymentSchema, "payment");

module.exports = Payment;
