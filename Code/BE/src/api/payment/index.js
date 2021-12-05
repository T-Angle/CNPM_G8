const route = require("express").Router();
const paymentController = require("./payment.controller");
const verifyJWT = require("../../middlewares/verifyJWT");

route.use((req, res, next) => {
	verifyJWT(req.query.token, req, next);
});

route.put("/paid", paymentController.paid);
route.put("/deposit", paymentController.deposit);
route.get("/paymentHistory", paymentController.paymentHistory);

module.exports = route;
