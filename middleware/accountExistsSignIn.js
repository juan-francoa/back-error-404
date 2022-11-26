const User = require("../models/User");
const { invalidCredentialsResponse } = require("../responses/auth");

async function accountExists(req, res, next) {
    const user = await User.findOne({mail: req.body.mail})
    if (user) {
        req.user = user
        return next()
    }
    invalidCredentialsResponse(req,res)
}

module.exports = { accountExists }
