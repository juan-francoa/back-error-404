const {userNotFoundResponse} = require("../config/responses")

const verifyUser = (model) => [ 
    async(req,res,next) => {
        let item = await model.findOne({_id: req.params.id})
        if(item.userId.equals(req.user._id)){
            return next()
        } else{
            return userNotFoundResponse(req, res)
        }
    }
]

module.exports = verifyUser