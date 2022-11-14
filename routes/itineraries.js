let router = require('express').Router();

let {read} = require('../controllers/Itinerary');

router.get('/', read);

module.exports = router;