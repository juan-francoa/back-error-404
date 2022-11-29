let router = require("express").Router()
const passport = require('../config/passport')
const validator = require('../middleware/validator');
const {create} =  require("../controllers/reaction")
const schemaReaction = require("../schemas/reaction")

router.post("/", validator(schemaReaction), create)

module.exports = router;