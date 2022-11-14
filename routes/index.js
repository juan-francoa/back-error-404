let router = require("express").Router()

/* GET home page. */
let user = require("./users")
let cities = require("./cities")
let itineraries = require("./itineraries")
router.use("/users", user)
router.use("/cities", cities)
router.use("/itineraries", itineraries)

module.exports = router;
