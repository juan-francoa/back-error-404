let router = require("express").Router()

/* GET home page. */
let user = require("./users")
let cities = require("./cities")
let itineraries = require("./itineraries")
let hotels = require("./hotels")
let shows = require("./shows")
let reactions = require("./reactions")
let comments = require("./comments")

router.use("/auth", user)
router.use("/cities", cities)
router.use("/itineraries", itineraries)
router.use("/hotels", hotels)
router.use("/shows", shows)
router.use("/reactions",reactions)
router.use("/comments", comments)

module.exports = router;
