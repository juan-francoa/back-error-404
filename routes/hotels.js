let router = require("express").Router()

let {create, read, readOne} = require("../controllers/hotel")

router.route("/").post(create)
router.route("/").get(read)
router.route("/:id").get(readOne)

module.exports = router;