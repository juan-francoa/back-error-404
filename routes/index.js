let router = require("express").Router()

/* GET home page. */
let user = require("./user")
router.use("/user", user)


module.exports = router;
