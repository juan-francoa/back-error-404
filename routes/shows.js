let router = require("express").Router()

let {read, create, update} = require("../controllers/show")


router.route("/").get(read);
router.route("/").post(create);
router.route("/:id").put(update);

module.exports = router;