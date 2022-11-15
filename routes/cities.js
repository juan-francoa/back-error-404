let router = require("express").Router()

let {create, read, readOne, update, destroyOne} = require("../controllers/city")

router.route("/").post(create);
router.route("/").get(read);
router.get('/:id', readOne);
router.route('/:id').put(update);
router.route('/:id').delete(destroyOne);

module.exports = router;