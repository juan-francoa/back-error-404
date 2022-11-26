let admins = [
    {
        name:"Luis",
        lastName:"Perez",
        role:"admin",
        photo:"https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg?w=826&t=st=1668177986~exp=1668178586~hmac=3f4126c9cb64cd24dae75c9b05dfb7c3dcd087c53227170518feefc651bab6a8",
        age:32,
        email:"luispeez@hotmail.com",
        password:"Hola12345",
        code:"luis12",
        verified:true,
        logged:true 
    },
    {
        name:"Sofia",
        lastName:"Posada",
        role:"admin",
        photo:"https://img.freepik.com/foto-gratis/primer-plano-encantadora-joven-morena-mujer-europea-feliz-cabello-largo-fuerte-sking-limpio-sonriendo-amable-mientras-tira-mano-adelante-como-si-estuviera-tomando-selfie_176420-23649.jpg?w=1380&t=st=1668177881~exp=1668178481~hmac=3f89ba46e12824f3588b25fe643b87f30b4f9c43e45f408e8a261886223d3449",
        age:26,
        email:"sofiaposada@hotmail.com",
        password:"Posa1234",
        code:"posada26",
        verified:true,
        logged:true  
    },
    {
        name:"Anderson",
        lastName:"Pelaez",
        role:"admin",
        photo:"https://cdn.discordapp.com/attachments/1028015158250979369/1040638560400834590/unknown.png",
        age:31,
        email:"andersonpelaez@gmail.com",
        password:"Ander1234",
        code:"anderson31",
        verified:true,
        logged:true 
    },
    {
        name:"Belen",
        lastName:"Salto",
        role:"admin",
        photo:"https://img.freepik.com/foto-gratis/primer-plano-encantadora-joven-morena-mujer-europea-feliz-cabello-largo-fuerte-sking-limpio-sonriendo-amable-mientras-tira-mano-adelante-como-si-estuviera-tomando-selfie_176420-23649.jpg?w=1380&t=st=1668177881~exp=1668178481~hmac=3f89ba46e12824f3588b25fe643b87f30b4f9c43e45f408e8a261886223d3449",
        age:26,
        email:"belensalto@hotmail.com",
        password:"Belen1234",
        code:"belen26",
        verified:true,
        logged:true 
    }
]
require("dotenv").config()
require("../../config/database")
const User = require("../User")

admins.forEach(e =>
    User.create({
        name: e.name,
        lastName: e.lastName,
        role: e.role,
        photo: e.photo,
        age: e.age,
        email: e.email,
        password: e.password,
        code: e.code,
        verified: e.verified,
        logged: e.logged,
    })
)