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
            for(let name in query){
                if( name === "name"){
                    array = array.filter(e=>e.name.toLowerCase().includes(query.name.toLowerCase()))
                }
                if( name === "continent"){
                    array = array.filter(e=> e.continent.toLowerCase().includes(query.continent.toLowerCase()) )
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
}

module.exports = controller