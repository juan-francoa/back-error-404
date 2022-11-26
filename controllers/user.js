const User = require('../models/User')

const controller = {

    create: async(req,res) => { //método para crear un User
        try {
            let nuevo = await User.create(req.body)
            res.status(201).json({
                id: nuevo._id,
                success: true,
                message: "el User se creó satisfactoriamente"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
}

module.exports = controller