const express = require("express");
const hotelRoute = require("./hotelRoutes/hotel.route");

const router = express.Router();

router.use("/hotel",hotelRoute);

module.exports = router;