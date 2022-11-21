let router = require("express").Router()
const schema = require("../schemas/newCities")
const validator = require("../middleware/validator")

let {create, read, readOne, update, destroyOne} = require("../controllers/city")

router.route("/").post(validator(schema), create);
router.route("/").get(read);
router.get('/:id', readOne);
router.route('/:id').put(update);
router.route('/:id').delete(destroyOne);

module.exports = router;