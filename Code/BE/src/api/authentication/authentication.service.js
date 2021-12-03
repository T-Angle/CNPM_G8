const User = require("../../models/user");
const { httpStatus } = require("../../common/utils/http-status");
const { serviceReturn } = require("../../common/services/service-return");

module.exports = {
	register: async (body, next) => {
		try {
			//Check if email is exist
			const isExisted = await User.findByEmail(body.email);

			if (isExisted) {
				return serviceReturn(
					"Cannot save user",
					httpStatus.INTERNAL_SERVER_ERROR
				);
			}

			//otherwise
			const user = new User(body);
			let result = await user.save();

			return serviceReturn(result, httpStatus.OK);
		} catch (error) {
			next(error);
		}
	},
	login: async (body, res, next) => {
		try {
			const { email, password } = body;

			const user = await User.findByCredentials(email, password);

			if (!user) {
				return serviceReturn("Invalid Account", httpStatus.UNAUTHORIZED);
			}

			const secret = process.env.JWT_SECRET;
			const token = await user.issueJWT(secret);

			return serviceReturn({ token, user }, httpStatus.OK);
		} catch (error) {
			next(error);
		}
	},
};
