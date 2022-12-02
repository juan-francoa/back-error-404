let router = require("express").Router()
const passport = require('../config/passport')
const validator = require('../middleware/validator');
const {create,update,read, deleteReaction} =  require("../controllers/reaction")
const schemaReaction = require("../schemas/reaction")

router.post("/", validator(schemaReaction), create)
router.put("/", passport.authenticate("jwt", { session: false }), update)
router.get("/",read)
router.put('/:id', passport.authenticate("jwt", { session: false }), deleteReaction )

module.exports = router;