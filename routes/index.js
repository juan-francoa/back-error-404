let router = require("express").Router()

/* GET home page. */
let user = require("./users")
let cities = require("./cities")
router.use("/users", user)
router.use("/cities", cities)


module.exports = router;
