const Usuario = require("../models/User");
const { userExistsResponse } = require("../config/responses");

async function accountExists(req, res, next) {
    const user = await Usuario.findOne({email: req.body.email})
    console.log(req.body.email)
    if (user) {
        return userExistsResponse(req,res)
    }
    return next()
}

module.exports = { accountExists }
