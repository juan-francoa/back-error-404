let router = require("express").Router()

/* GET home page. */
let user = require("./users")
router.use("/users", user)


module.exports = router;
