const route = require("express").Router();

const cardController = require("./card.controller");
const verifyJWT = require("../../middlewares/verifyJWT");

route.use((req, res, next) => {
	verifyJWT(req.query.token, req, next);
});

route.get("/validate-card", cardController.validateCard);
route.post("/create-card", cardController.createCard);

module.exports = route;
