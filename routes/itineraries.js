let router = require('express').Router();
const { Router } = require('express');
let {read, create, update, destroyOne} = require('../controllers/itinerary');
const passport = require('../config/passport')
const validator = require('../middlewares/validator');
const schemaItinerary = require('../schemas/itinerary');

router.get('/', read);
router.post('/', passport.authenticate("jwt", { session: false }), validator(schemaItinerary), create);
router.put('/:id', passport.authenticate("jwt", { session: false }), update);
router.delete('/:id', passport.authenticate("jwt", { session: false }), destroyOne);

module.exports = router;