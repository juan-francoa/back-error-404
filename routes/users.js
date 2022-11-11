let router = require("express").Router()

let {create} = require("../controllers/user")

router.router("/").post(create)

module.exports = router;
