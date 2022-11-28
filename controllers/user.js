const User = require('../models/User')
const bcryptjs = require('bcryptjs') //de esta libreria vamos a utilizar el método hashSync para encriptar la contraseña
const crypto = require('crypto')//de este modulo vamos a requerir el método randomBytes
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../config/responses')
const jwt = require("jsonwebtoken")
const { id } = require('../schemas/user')

const controller = {
    registrar: async (req, res, next) => {
        //método para que un usuario se registre
        //luego de pasar por todas las validaciones:
        //desestructura el cuerpo
        let { name, lastName, photo, age, email, password } = req.body
        //define las propilastNamees "extras" que necesite (logged, code y verified)
        let verified = false
        let logged = false
        let role = "user"
        let code = crypto.randomBytes(10).toString('hex')
        //encripto o hasheo la password
        password = bcryptjs.hashSync(password, 10)
        console.log(password)
        try {
            //crea el usuario
            await User.create({ name, lastName, role, photo, age, email, password, code, verified, logged })
            //envía email de verificación (con transportador)
            await accountVerificationEmail(email, code)
            return userSignedUpResponse(req, res)
        } catch (error) {
            next(error)
        }
    },
    verificar: async (req, res, next) => {
        const { code } = req.params
        try {
            let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
            if (user) {
                return res.redirect("http://localhost:3000")
            }
            return userNotFoundResponse(req, res)
        }
        catch (error) {
            next(error)
        }
    },
    ingresar: async (req, res, next) => {
        const { password } = req.body
        const { user } = req
        try {
            const verifyPassword = bcryptjs.compareSync(password, user.password)
            if (verifyPassword) {
                const userDb = await User.findOneAndUpdate({ _id: user._id }, { logged: true }, { new: true })
                const token = jwt.sign(
                    {
                        _id: userDb._id,
                        name: userDb.name,
                        photo: userDb.photo,
                        logged: userDb.logged,
                        role: userDb.role
                    },
                    process.env.KEY_JWT,
                    { expiresIn: 60 * 60 * 24 }
                )
                return res.status(200).json({
                    response: {
                        user: {
                            _id: userDb._id,
                            name: userDb.name,
                            photo: userDb.photo,
                            logged: userDb.logged,
                            role: userDb.role
                        }, token
                    },
                    success: true,
                    message: "welcome " + user.name
                })
            }
            return invalidCredentialsResponse(req, res)
        }
        catch (error) {
            next(error)
        }
    },
    ingresarConToken: async (req, res, next) => {
        let { user } = req
        try {
            console.log(user)
            return res.json({
                response: {
                    user: {
                        name: user.name,
                        photo: user.photo,
                        logged: user.logged,
                        role: user.role
                    },
                },
                success: true,
                message: "Welcome " + user.name
            })
        }
        catch (error) {
            next(error)
        }
    }, 
    salir: async (req, res, next) => {
        const{email} = req.user

        try {
        await User.findOneAndUpdate ({email : email}, {logged: false}, {new: true})

        return userSignedOutResponse (req, res)
        }

        catch (error) {
            next (error)
        }
    },
    verMisDatos: async (req, res, next) => {
        const id = req.params.id

        try{
            let verMisDatos = await User.findOne ({_id:id})
            if (verMisDatos) {
                res.status(200).json({
                    response: verMisDatos,
                    success: true,
                    message: "user find"
            })
        }
            else{
                res.status(404).json({
                success: false,
                message: "user not find"
            })} 
        }
        catch (error){
            next (error)
        }
    },
    editarMisDatos: async (req, res, next) => {
        const id = req.params.id
        try{
            let editarMisDatos = await User.findOneAndUpdate ({_id: id}, req.body, {new: true})
            if (editarMisDatos) {
                res.status(200).json({
                    response: editarMisDatos,
                    success: true,
                    message: "user edit"
            })
        }
            else{
                res.status(404).json({
                success: false,
                message: "user not edit"
            })} 
        }
        catch (error){
            next (error)
        }
    }
}

module.exports = controller