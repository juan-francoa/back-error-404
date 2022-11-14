let router = require("express").Router()

let {read} = require("../controllers/show")


router.route("/").get(read)


module.exports = router;