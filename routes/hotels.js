let router = require("express").Router()

let {create, read, readOne, update} = require("../controllers/hotel")

router.route("/").post(create)
router.route("/").get(read)
router.route("/:id").get(readOne)
router.route("/:id").put(update)


module.exports = router;