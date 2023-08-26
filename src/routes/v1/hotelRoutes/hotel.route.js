const express = require("express");
const { hotelValidation } = require("../../../validations");
const { hotelController } = require("../../../controllers");
const validate = require("../../../middlewares/validate")

const router = express.Router();

//  create hotel
router.post(
    "/create-hotel",
    validate(hotelValidation.createHotel),
    hotelController.createHotel
);

//  get hotel list
router.get(
    "/list",
    validate(hotelValidation.getUserList),
    hotelController.getHotelList
);

//  get hotel details by Id
router.get(
    "/get-details/:hotelId",
    validate(hotelValidation.getDetails),
    hotelController.getHotelDetails
);

//  Delete Hotel
router.delete(
    "/delete-hotel/:hotelName",
    validate(hotelValidation.getDetails),
    hotelController.deleteHotel
);

module.exports = router;