let router = require("express").Router()

let {create, read, readOne} = require("../controllers/city")

router.route("/").post(create)
router.route("/").get(read)
router.get('/:id', readOne);

module.exports = router;