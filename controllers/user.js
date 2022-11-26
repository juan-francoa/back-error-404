const User = require('../models/User')
const bcryptjs = require('bcryptjs') //de esta libreria vamos a utilizar el método hashSync para encriptar la contraseña
const crypto = require('crypto')//de este modulo vamos a requerir el método randomBytes
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse } = require('../config/responses')

const controller = {
    registrar: async(req,res,next) => {
        //método para que un usuario se registre
        //luego de pasar por todas las validaciones:
            //desestructura el cuerpo
            let { name,lastName,photo,age,email,password} = req.body
            //define las propilastNamees "extras" que necesite (logged, code y verified)
            let verified = false
            let logged = false
            let role = "user"
            let code = crypto.randomBytes(10).toString('hex')
            //encripto o hasheo la password
            password = bcryptjs.hashSync(password,10)
            console.log(password)     
        try {
            //crea el usuario
            await User.create({ name,lastName,role,photo,age,email,password,code,verified,logged })
            //envía email de verificación (con transportador)
            await accountVerificationEmail(email,code)
            return userSignedUpResponse(req,res)
        } catch(error) {
            next(error)
        }
    },
    verificar: async(req, res, next ) =>{
        const { code } = req.params
        try{
            let user = await User.findOneAndUpdate({code:code},{verified:true},{new: true})
            if(user){
                return res.redirect("http://localhost:3000")
            }
            return userNotFoundResponse(req,res)
        }
        catch(error){
            next(error)
        }
    }
}

module.exports = controller