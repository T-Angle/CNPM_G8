const jwt = require("jsonwebtoken");

module.exports = (token, req, next) => {
	try {
		const uid = jwt.verify(token, process.env.JWT_SECRET);

		delete uid.iat;

		req.uid = { ...uid };
		next();
	} catch (error) {
		next(error);
	}
};
