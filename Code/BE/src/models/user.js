const mongoose = require("mongoose");
const isEmail = require("validator/lib/isEmail");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { AppError } = require("../common/utils/errorHandler");
const { httpStatus } = require("../common/utils/http-status");

const userSchema = new mongoose.Schema({
	role: {
		type: String,
		default: "customer",
		enum: ["admin", "customer"],
	},
	thumbnail: {
		type: String,
	},
	name: {
		type: String,
	},
	school: {
		type: String,
	},
	dob: {
		type: Date,
	},
	username: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
		trim: true,
		validate: [isEmail, "invalid email"],
	},
	password: {
		type: String,
		required: true,
	},
});

//#region db_actions
userSchema.methods.issueJWT = async function (secret) {
	const token = jwt.sign({ _id: this._id.toString() }, secret);

	return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });

	if (!user) {
		return;
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (user && isMatch) {
		return user;
	}
};

userSchema.statics.findByEmail = async (email) => {
	const user = await User.findOne({ email });
	return user ? true : false;
};
//#endregion

//#region Hooks
userSchema.pre("save", async function (next) {
	try {
		const user = this;

		if (!user.isModified || !user.isNew) {
			next();
		}

		const salt = await bcrypt.genSalt(10);

		if (!salt) {
			throw new AppError(
				httpStatus.INTERNAL_SERVER_ERROR,
				"Salt cannot generated"
			);
		}

		const hash = await bcrypt.hash(this.password, salt);
		user.password = hash;
		next();
	} catch (error) {
		next(error);
	}
});
//#endregion

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
