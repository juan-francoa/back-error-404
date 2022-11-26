let router = require("express").Router()
const validator = require("../middleware/validator")
const schema = require("../schemas/user")
let {registrar, verificar, ingresar, ingresarConToken} = require("../controllers/user")
let {accountExists} = require("../middleware/accountExistsSignUp")
let {accountExistsSignIn} = require("../middleware/accountExistsSignIn")
let {accountHasBeenVerified} = require("../middleware/accountHasBeenVerified")
let mustSignIn = require("../middleware/mustSignIn")
let passport = require("../config/passport")
let schemaLogin = require("../schemas/userLogin")

router.route("/sign-up").post( validator(schema),accountExists,registrar)
router.get("/verify/:code",verificar)
router.post("/sign-in" ,validator(schemaLogin),accountExistsSignIn, accountHasBeenVerified,ingresar)
router.post("/token",passport.authenticate("jwt",{session:false}), mustSignIn, ingresarConToken )

module.exports = router;
