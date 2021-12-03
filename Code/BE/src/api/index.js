const router = require("express").Router();

//module calling
const auth = require("./authentication");
const book = require("./book");
const card = require("./card");
const payment = require("./payment");

router.use("/auth", auth);
router.use("/book", book);
router.use("/card", card);
router.use("/payment", payment);

module.exports = router;
