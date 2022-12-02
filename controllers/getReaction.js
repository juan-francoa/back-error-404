const Reaction = require('../models/Reaction');


const controller = {

    reactionsUser: async (req, res) => {
        let { query } = req;
        try {
            let reactionsUser = await Reaction.find()
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
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    }
}


module.exports = controller;