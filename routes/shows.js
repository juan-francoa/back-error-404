let router = require("express").Router()
let {read, create, update, destroyOne} = require("../controllers/show")
const passport = require('../config/passport')
const validator = require('../middleware/validator');
const schemaShows = require('../schemas/shows');


router.get('/', read);
router.post('/', validator(schemaShows), passport.authenticate("jwt", { session: false }), create);
router.patch('/:id', passport.authenticate("jwt", { session: false }),  update);
router.delete('/:id', passport.authenticate("jwt", { session: false }),  destroyOne);

module.exports = router;