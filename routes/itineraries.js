let router = require('express').Router();

const { Router } = require('express');
let {read, create, update} = require('../controllers/itinerary');

router.get('/', read);
router.post('/', create);
router.put("/:id", update);

module.exports = router;