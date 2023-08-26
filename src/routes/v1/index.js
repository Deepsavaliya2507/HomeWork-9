const express = require("express");
const hotelRoute = require("./hotelRoutes/hotel.route");
const busRoute = require("./busRoutes/bus.route");
const groceryRoute = require("./groceryRoutes/grocery.route");
const jewelleryRoute = require("./jewelleryRoutes/jewellery.route");
const movieRoute = require("./movieRoutes/movie.route");
const musicRoute = require("./musicRoutes/music.route");
const pharmaRoute = require("./pharmaRoutes/pharma.route");
const schoolRoute = require("./schoolRoutes/school.route");
const stationeryRoute = require("./stationaryRoutes/stationer.route");
const travelRoute = require("./travelRoutes/travel.route");

const router = express.Router();

router.use("/hotel",hotelRoute);
router.use("/bus",busRoute);
router.use("/grocery",groceryRoute);
router.use("/jewelllery",jewelleryRoute);
router.use("/movie",movieRoute);
router.use("/music",musicRoute);
router.use("/pharma",pharmaRoute);
router.use("/school",schoolRoute);
router.use("/stationery",stationeryRoute);
router.use("/travel",travelRoute);

module.exports = router;