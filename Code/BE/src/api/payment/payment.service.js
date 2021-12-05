const Card = require("../../models/card");
const Payment = require("../../models/payment");
const { serviceReturn } = require("../../common/services/service-return");
const { httpStatus } = require("../../common/utils/http-status");

const { paymentHistory } = require("./middlewares/paymentHistory.service");

const { statusEnum } = require("./statusEnum");

module.exports = {
	paid: async (uid, price, next) => {
		try {
			const card = await Card.findOne({
				userId: uid,
			});

			if (card.credit - price < 0) {
				return serviceReturn("Credit is not enough", httpStatus.BAD_REQUEST);
			}

			const substractCredit = card.credit - price;

			let result = await Card.updateOne(
				{ _id: card._id },
				{
					$set: {
						credit: substractCredit,
					},
				}
			);

			if (result) {
				await paymentHistory(
					uid,
					"paid",
					price,
					substractCredit,
					statusEnum[1],
					next
				);
			} else {
				await paymentHistory(
					uid,
					"paid",
					price,
					substractCredit,
					statusEnum[0],
					next
				);
			}

			return serviceReturn("Paid successfully", httpStatus.OK);
		} catch (error) {
			next(error);
		}
	},
	deposit: async (uid, deposit, next) => {
		try {
			const card = await Card.findOne({
				userId: uid,
			});

			let newDeposit = card.credit + deposit;

			if (card) {
				let result = await Card.updateOne(
					{ _id: card._id },
					{
						$set: {
							credit: newDeposit,
						},
					}
				);

				if (result) {
					await paymentHistory(
						uid,
						"deposit",
						deposit,
						newDeposit,
						statusEnum[1],
						next
					);
				} else {
					await paymentHistory(
						uid,
						"deposit",
						deposit,
						newDeposit,
						statusEnum[0],
						next
					);
				}
			}

			return serviceReturn("Deposit successfully", httpStatus.OK);
		} catch (error) {
			next(error);
		}
	},
	paymentHistory: async (uid, next) => {
		try {
			const card = await Card.findOne({
				userId: uid,
			});

			const payment = await Payment.find({
				cardId: card._id,
			});

			return serviceReturn(payment, httpStatus.OK);
		} catch (error) {
			next(error);
		}
	},
};
