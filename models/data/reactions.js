let axios = require("axios")
let arrayDatos = []
let reaction = ["https://img.icons8.com/material-outlined/2x/facebook-like--v2.png", "https://img.icons8.com/material-outlined/2x/thumbs-down.png", "https://img.icons8.com/material-outlined/512/hearts.png", "https://img.icons8.com/material-outlined/2x/surprised.png"]
//img con solo bordes
let reactionBack = ["https://img.icons8.com/material-rounded/2x/facebook-like--v2.png", "https://img.icons8.com/material-rounded/2x/thumbs-down.png", "https://img.icons8.com/material-rounded/512/hearts.png", "https://img.icons8.com/material-sharp/2x/surprised.png"]
//img completas 
let emog = ["like", "not-like", "love", "surprise"]
require("dotenv").config()
require("../../config/database")
const Reaction = require("../Reaction")
const func = async () => {
    let array = await axios.get("http://localhost:8000/api/itineraries")
    if (array) {
        array.data.data.forEach(e => reaction.forEach((el, ji) => arrayDatos.push({ itineraryId: e._id, name: emog[ji], icon: el, iconBack: reactionBack[ji] })));
    }
    arrayDatos.forEach(e =>
        Reaction.create({
            itineraryId: e.itineraryId,
            name: e.name,
            icon: e.icon,
            iconBack: e.iconBack
        })
    )
}
func()



