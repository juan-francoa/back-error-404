let router = require("express").Router()
const passport = require('../config/passport')

let {read, create} = require("../controllers/comment")

router.get("/" ,read)
router.post("/", passport.authenticate("jwt", { session: false }),create)

module.exports = router;