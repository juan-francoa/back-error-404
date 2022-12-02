const Comment = require('../models/Comment')

const controller = {

    read: async(req,res) => { 
        let query = {};
        if (req.query.showId) {
            query = {
                showId: req.query.showId
            };
        }
       
        try {
            let nuevo = await Comment.find()
            .populate({ path: 'userId', select: 'name photo _id' })
            if(query.showId){
                nuevo = nuevo.filter(e => e.showId == query.showId)
            }
            console.log(nuevo)       
            res.status(201).json({
                response: nuevo,
                success: true,
                message: "comment of show"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    create: async (req, res) => {
        try {
            let new_Comment = await Comment.create(req.body);
            res.status(201).json({
                id: new_Comment,
                success: true,
                message: 'Comment created',
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

}

module.exports = controller