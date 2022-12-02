let router = require("express").Router()
const passport = require('../config/passport')
let {read, create, update, destroyOne} = require("../controllers/comment")
const verifyUser = require("../middleware/verifyUser")
const model = require("../models/Comment")

router.get("/" ,read)
router.post("/", passport.authenticate("jwt", { session: false }), create)
router.put("/:id", passport.authenticate("jwt", { session: false }),verifyUser(model), update)
router.delete("/:id", passport.authenticate("jwt", { session: false }), verifyUser(model) , destroyOne)

module.exports = router;