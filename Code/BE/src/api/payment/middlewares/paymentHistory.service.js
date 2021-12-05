const Payment = require("../../../models/payment");
const Card = require("../../../models/card");

const { statusEnum } = require("../statusEnum");

const descriptionType = (price, newPrice) => {
	return {
		0: `Transaction failed`,
		1: `Balance has been changed. Paid: ${price}. New balance: ${newPrice}`,
		2: `Balance has been changed. Add: ${price}. New balance: ${newPrice}`,
	};
};

/** Update payment history
 *
 * @param {*} uid
 * @param {*} paymentType === 0 ? paid : deposit
 * @param {*} paid
 * @param {*} newPrice
 * @param {*} next
 */

async function paymentHistory(uid, paymentType, paid, newPrice, status, next) {
	try {
		if (!paymentType) {
			next("paymentType is required");
		}

		let cardUser = await Card.findOne({
			userId: uid,
		});

		let payment = await Payment({
			cardId: cardUser._id,
			date: Date.now(),
			status: status,
			description:
				status === statusEnum[1]
					? paymentType === "paid"
						? descriptionType(paid, newPrice)[1]
						: descriptionType(paid, newPrice)[2]
					: descriptionType(paid, newPrice)[0],
		});

		let result = await payment.save();
		if (result) {
			return true;
		}

		return false;
	} catch (error) {
		next(error);
	}
}

module.exports.paymentHistory = paymentHistory;
