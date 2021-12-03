const Card = require("../../models/card");
const { serviceReturn } = require("../../common/services/service-return");
const { httpStatus } = require("../../common/utils/http-status");

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

			await Card.updateOne(
				{ _id: card._id },
				{
					$set: {
						credit: substractCredit,
					},
				}
			);

			return serviceReturn("Paid successfully", httpStatus.OK);
		} catch (error) {
			next(error);
		}
	},
};
