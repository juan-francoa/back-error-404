let router = require('express').Router();

const { Router } = require('express');
let {read, create, update, destroyOne} = require('../controllers/itinerary');

router.get('/', read);
router.post('/', create);
router.put("/:id", update);
router.delete("/:id", destroyOne);

module.exports = router;