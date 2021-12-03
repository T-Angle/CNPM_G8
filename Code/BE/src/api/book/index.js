const express = require("express");
const route = express.Router();

const BookController = require("./book.controller");

route.get("/get-all-books", BookController.getAllBooks);

module.exports = route;
