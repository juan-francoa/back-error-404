const Hotel = require('../models/Hotel')

const controller = {

    create: async(req,res) => { //método para crear un Hotel
        try {
            let nuevo = await Hotel.create(req.body)
            res.status(201).json({
                id: nuevo._id,
                success: true,
                message: "el Hotel se creó satisfactoriamente"
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