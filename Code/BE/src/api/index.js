const router = require("express").Router();

//module calling
const auth = require("./authentication");
const book = require("./book");
const card = require("./card");
const payment = require("./payment");
const user = require("./user");

router.use("/auth", auth);
router.use("/book", book);
router.use("/card", card);
router.use("/payment", payment);
router.use("/user", user);

module.exports = router;
