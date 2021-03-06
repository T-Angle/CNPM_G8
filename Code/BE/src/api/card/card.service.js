const Card = require("../../models/card");
const User = require("../../models/user");

const { httpStatus } = require("../../common/utils/http-status");
const { serviceReturn } = require("../../common/services/service-return");
const { numberGenerator } = require("../../common/utils/numberGenerator");

const CardReturnFormat = (cardObj, userObj) => {
	return {
		name: userObj.name,
		school: userObj.school,
		dob: userObj.dob,
		cardId: cardObj.cardId,
		expired: cardObj.expired,
		credit: cardObj.credit,
	};
};

module.exports = {
	validateCard: async (uid, next) => {
		try {
			const card = await Card.findOne({ userId: uid });
			const user = await User.findById(uid);

			if (card) {
				return serviceReturn(CardReturnFormat(card, user), httpStatus.OK);
			}

			return serviceReturn({}, httpStatus.NOT_FOUND);
		} catch (error) {
			next(error);
		}
	},

	createCard: async (user_info, uid, next) => {
		try {
			let user = await User.updateOne(
				{ _id: uid },
				{
					$set: {
						dob: user_info.dob,
						name: user_info.name,
						school: user_info.school,
					},
				}
			);

			if (user) {
				//create card
				const date = new Date();
				date.setFullYear(date.getFullYear() + 1);

				let randNum = `${numberGenerator(
					1000000000000000,
					9999999999999999,
					true
				)}`;

				let cardNumber = randNum.match(/\d{4}/g);
				cardNumber = cardNumber.join(" ");

				const card = new Card({
					cardId: cardNumber,
					userId: uid,
					expired: date,
				});

				let result = await card.save();
				user = await User.findById(uid).exec();

				result = {
					name: user.name,
					school: user.school,
					dob: user.dob,
					cardId: result.cardId,
					expired: result.expired,
					credit: result.credit,
				};

				return serviceReturn(result, httpStatus.OK);
			}

			return serviceReturn(
				"cannot create card",
				httpStatus.INTERNAL_SERVER_ERROR
			);
		} catch (error) {
			next(error);
		}
	},
};
