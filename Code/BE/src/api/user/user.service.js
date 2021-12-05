const User = require("../../models/user");

const { serviceReturn } = require("../../common/services/service-return");
const { httpStatus } = require("../../common/utils/http-status");

module.exports = {
	getUser: async (uid, next) => {
		try {
			const user = await User.findById(uid);
			console.log(user);

			if (user) {
				return serviceReturn(user, httpStatus.OK);
			}

			return;
		} catch (error) {
			next(error);
		}
	},
};
