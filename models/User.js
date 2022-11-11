const mongoose = require("mongoose")
const schema = new mongoose.Schema({

    name:{type: String , required: true},
    lastName: {type: String, required: true},
    role: {type: String, required: true},
    photo: {type: String, required: true},
    age:{type: Number, required: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    code: {type: String, require: true},
    verified : {type: Boolean, require:true},
    logged : {type: Boolean, require:true}
}
)
const User = mongoose.model("users", schema)
module.exports = User