let router = require("express").Router()
const passport = require('../config/passport')
const validator = require('../middleware/validator');
const {create,update,cantidadReactions,reactionsUser} =  require("../controllers/reaction")
const schemaReaction = require("../schemas/reaction")

router.post("/", validator(schemaReaction), create)
router.put("/", passport.authenticate("jwt", { session: false }), update)
router.get("/", cantidadReactions)
router.get("/?", passport.authenticate("jwt", { session: false }), reactionsUser)

module.exports = router;