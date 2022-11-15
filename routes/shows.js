let router = require("express").Router()

let {read, create} = require("../controllers/show")


router.route("/").get(read);
router.route("/").post(create);

module.exports = router;