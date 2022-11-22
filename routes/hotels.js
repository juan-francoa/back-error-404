let router = require("express").Router()
const schema1 = require("../schemas/newHotels")
const validatorform = require("../middleware/validatorformhotels")

let {create, read, readOne, update, destroyOne} = require("../controllers/hotel")

router.route("/").post(validatorform(schema1), create);
router.route("/").get(read)
router.route("/:id").get(readOne)
router.route("/:id").put(update)
router.route("/:id").delete(destroyOne)


module.exports = router;