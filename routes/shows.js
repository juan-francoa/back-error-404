let router = require("express").Router()
let {read, create, update, destroyOne} = require("../controllers/show")
const passport = require('../config/passport')
const validator = require('../middlewares/validator');
const schemaShows = require('../schemas/show');


router.get('/', read);
router.post('/', passport.authenticate("jwt", { session: false }), validator(schemaShows), create);
router.patch('/:id', passport.authenticate("jwt", { session: false }),  update);
router.delete('/:id', passport.authenticate("jwt", { session: false }),  destroyOne);

module.exports = router;