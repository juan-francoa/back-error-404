const Reaction = require('../models/Reaction');


const controller = {

    create: async (req, res) => {

        try {
            let reaction = await Reaction.create(req.body)
            if (reaction) {
                res.status(201).json({
                    success: true,
                    message: "reaction create"
                })
            }
        }

        catch (error) {
            res.status(400).json({
                success: true,
                message: error.message
            })
        }
    },

    update: async (req, res) => {

        let { query } = req;
        let userId = req.user._id
        try {
            let itinerary = await Reaction.find()
            let busq = {}
            for (let name in query) {
                if (name === "name") {
                    if (query.name === "like") {
                        itinerary = itinerary.filter(e => e.icon == "https://img.icons8.com/material-outlined/2x/facebook-like--v2.png")
                    }
                    else if (query.name === "not-like") {
                        itinerary = itinerary.filter(e => e.icon == "https://img.icons8.com/material-outlined/2x/thumbs-down.png")
                    }
                    else if (query.name === "love") {
                        itinerary = itinerary.filter(e => e.icon == "https://img.icons8.com/material-outlined/512/hearts.png")
                    }
                    else if (query.name === "surprise") {
                        itinerary = itinerary.filter(e => e.icon == "https://img.icons8.com/material-outlined/2x/surprised.png")
                    }
                }
                if (name === "itineraryId") {
                    itinerary = itinerary.filter(e => e.itineraryId == query.itineraryId)
                }
            }
            if (!itinerary[0].userId.includes(userId)) {
                busq = { $push: { userId: userId } }
            }
            else {
                busq = { $pull: { userId: userId } }
            }
            let oneReaction = await Reaction.findByIdAndUpdate({ _id: itinerary[0]._id }, busq, { new: true });
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

    read: async (req, res) => {
        let { query } = req;
        try {
            if (query.itineraryId) {
                let reactions = await Reaction.find()
                reactions = reactions.filter(e => e.itineraryId == query.itineraryId)
                if (reactions) {
                    res.status(200).json({
                        success: true,
                        message: 'Reactions length',
                        data: reactions,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'Reactions not length',
                    });
                }
            }
            else if (query.userId) {
                let reactionsUser = await Reaction.find().populate({ path: 'itineraryId', select: 'name photo _id' })
    
                reactionsUser = reactionsUser.filter(e => e.userId.includes(query.userId))
                if (reactionsUser) {
                    res.status(200).json({
                        success: true,
                        message: 'Reactions for user',
                        data: reactionsUser,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'Not reactions for user',
                    });
                }
            }

        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    
    deleteReaction: async (req, res) => {
        let { id } = req.params

        try {
            let reaction = await Reaction.findOneAndUpdate({ _id: id }, { $pull: { userId: req.user._id } }, { new: true })
            .populate({ path: 'itineraryId', select: 'name photo _id' })
            if (reaction) {
                res.status(200).json({
                    data: reaction,
                    message: `reaction deleted`,
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: `reaction not found`,
                    success: false,
                })
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },


}


module.exports = controller;