const Reaction = require('../models/Reaction');


const controller = {

    create: async (req, res) => {
        try{
            let reaction = await Reaction.create(req.body)
            if(reaction){
                res.status(201).json({
                    success:true,
                    message:"reaction create"
                })
            }
        }
        catch(error){
            res.status(400).json({
                success:true,
                message: error.message
            })
        }
    }

}

module.exports = controller;