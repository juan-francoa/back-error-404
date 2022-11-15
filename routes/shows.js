let router = require("express").Router()

let {read, create, update, destroyOne} = require("../controllers/show")


router.route("/").get(read);
router.route("/").post(create);
router.route("/:id").put(update);
router.route("/:id").delete(destroyOne)

module.exports = router;