let router = require("express").Router()
const validator = require("../middleware/validator")
const schema = require("../schemas/user")
let {registrar, verificar} = require("../controllers/user")
let {accountExists} = require("../middleware/accountExistsSignUp")

router.route("/sign-up").post( validator(schema),accountExists,registrar)
router.get("/verify/:code",verificar)

module.exports = router;
