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

    update: async (req, res) => {
        let { id } = req.params;
        try {
            let comment = await Comment.findOneAndUpdate({ _id: id }, req.body, { new: true });
            if(comment){
                res.status(200).json({
                    success: true,
                    message: 'Comment updated',
                    data: comment,
                });
            }else{
                res.status(404).json({
                    success: false,
                    message: 'Comment not found',
                });
            }
        }catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

    destroyOne: async (req, res) => {
        let { id } = req.params;

        try {
            let comment = await Comment.findOneAndDelete({ _id: id });
            if(comment){
                res.status(200).json({
                    success: true,
                    message: 'Comment deleted',
                    data: comment,
                });
            }else{
                res.status(404).json({
                    success: false,
                    message: 'Comment not found',
                });
            }
    }catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

}

module.exports = controller