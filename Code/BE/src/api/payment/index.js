const route = require("express").Router();
const paymentController = require("./payment.controller");
const verifyJWT = require("../../middlewares/verifyJWT");
const { verify } = require("jsonwebtoken");

route.use((req, res, next) => {
	verifyJWT(req.query.token, req, next);
});

route.put("/paid", paymentController.paid);

module.exports = route;
