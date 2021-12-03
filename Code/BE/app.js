require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT | 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
//use cookie-parser
app.use(cookieParser());

app.use(cors());

//#region Mongodb Connection
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const uri =
	"mongodb+srv://khainguyen:kai_ng81@ebook.lubhi.mongodb.net/ebookdb?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((err) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log("Mongodb is connected");
});

mongoose.connect(uri, () => {
	console.log();
});

//#endregion

app.use(express.json());

const api = require("./src/api");

app.use("/api/v1", api);

//error handling
function errorHandler(error, req, res) {
	if (error) {
		res.status(500).json({
			error: error,
		});
	}
}

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});
