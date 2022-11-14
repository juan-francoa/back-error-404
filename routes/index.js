let router = require("express").Router()

/* GET home page. */
let user = require("./users")
let cities = require("./cities")
let itineraries = require("./itineraries")
let hotels = require("./hotels")

router.use("/users", user)
router.use("/cities", cities)
router.use("/itineraries", itineraries)
router.use("/hotels", hotels)

module.exports = router;
