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
    },

    update: async (req, res) => {

        let {itineraryId, name} = req.params;

        try{
            let oneReaction = await Reaction.findByIdAndUpdate({_id: itineraryId}, req.body, {new: true});
            if (oneReaction) {
                res.status(200).json({
                    success: true,
                    message: 'Reaction posted saved',
                    data: oneReaction,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Reaction posted not saved',
                });
            }
        }

        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
},

}

module.exports = controller;