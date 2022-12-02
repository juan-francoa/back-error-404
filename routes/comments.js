let router = require("express").Router()
const passport = require('../config/passport')
let {read, create, update, destroyOne} = require("../controllers/comment")

router.get("/" ,read)
router.post("/", passport.authenticate("jwt", { session: false }), create)
router.put("/:id", passport.authenticate("jwt", { session: false }), update)
router.delete("/:id", passport.authenticate("jwt", { session: false }), destroyOne)

module.exports = router;