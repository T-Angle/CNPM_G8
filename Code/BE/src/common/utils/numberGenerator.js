const random = require("simple-random-number-generator");

module.exports.numberGenerator = (min, max, isInteger) => {
	let params = {
		min: min,
		max: max,
		integer: isInteger,
	};

	let randNum = random(params);

	return randNum;
};
