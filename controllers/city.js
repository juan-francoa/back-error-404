const City = require('../models/City')

const controller = {

    create: async(req,res) => { //método para crear un City
        try {
            let nuevo = await City.create(req.body)
            res.status(201).json({
                id: nuevo._id,
                success: true,
                message: "la City se creó satisfactoriamente"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    read: async(req,res) => { //método para leer/obtener todos los City
        let { query } = req 
        
        //en la petición agrego un signo de pregunta ? para poder enviar una query/consulta
        //a la base de datos
        try {
            let todos = await City.find()
            let array = todos
            console.log(query, todos)
            for(let name in query){
                if( name === "name"){
                    array = array.filter(e=> e.name.toLowerCase().includes(query.name.toLowerCase()))
                }
                if( name === "continent"){
                    if(query.continent.length)
                    {array = array.filter(e=>  query.continent.toLowerCase().includes(e.continent.toLowerCase()) )}
                }
            }
            if (array) {
                res.status(200).json({
                    response: array,
                    success: true,
                    message: "se obtuvieron las ciudades"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay ciudades"
                })
            }            
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        
    },
    readOne: async (req, res) => {

        let { id } = req.params

        try {
            let city = await City.findOne({ _id: id }).populate({ path: 'userId', select: 'name photo -_id' });

            if (city) {
                res.status(200).json({
                    success: true,
                    message: 'City found',
                    data: city,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'City not found',
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
            let city = await City.findOneAndUpdate({ _id: id }, req.body, { new: true });
            if(city){
                res.status(200).json({
                    success: true,
                    message: 'City updated',
                    data: city,
                });
            }else{
                res.status(404).json({
                    success: false,
                    message: 'City not found',
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
            let city = await City.findOneAndDelete({ _id: id });
            if(city){
                res.status(200).json({
                    success: true,
                    message: 'City deleted',
                    data: city,
                });
            }else{
                res.status(404).json({
                    success: false,
                    message: 'User not found',
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