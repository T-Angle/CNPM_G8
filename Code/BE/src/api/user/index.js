const router = require("express").Router();
const userController = require("./user.controller");

const verifyJWT = require("../../middlewares/verifyJWT");

router.use((req, res, next) => {
	verifyJWT(req.query.token, req, next);
});

router.get("/get-user", userController.getUser);

module.exports = router;
