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
    read: async (req, res) => {
        let query = {}
        let order = {}

        if (req.query.name) {
            query = {
                ...query,
                name: { $regex: req.query.name, $options: 'i' },
            };
        }
        if (req.query.order) {
            order = { capacity: req.query.order }
        }
        if (req.query.user_id) {
            query = { user_id: req.query.user_id }
        }

        try {
            let allHotels = await Hotel.find(query).sort(order)
            if(req.query.user_id){
                allHotels = allHotels.filter(e => e.userId == query.user_id)
            }
            if (allHotels.length) {
                res.status(200).json({
                    response: allHotels,
                    success: true,
                    message: "all hotels have been found"
                })
            } else {
                res.status(404).json({
                    response: allHotels,
                    success: true,
                    message: "hotels not found"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    readOne: async (req, res) => {

        let { id } = req.params

        try {
            let hotel = await Hotel.findOne({ _id: id });

            if (hotel) {
                res.status(200).json({
                    success: true,
                    message: 'hotel found',
                    data: hotel,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'hotel not found',
                });
            }
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
            let hotel = await Hotel.findOneAndUpdate({ _id: id }, req.body, { new: true });
            if(hotel){
                res.status(200).json({
                    success: true,
                    message: 'hotel updated',
                    data: hotel,
                });
            }else{
                res.status(404).json({
                    success: false,
                    message: 'hotel not found',
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
            let hotel = await Hotel.findOneAndDelete({ _id: id });
            if(hotel){
                res.status(200).json({
                    success: true,
                    message: 'Hotel deleted',
                    data: hotel,
                });
            }else{
                res.status(404).json({
                    success: false,
                    message: 'Hotel not found',
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