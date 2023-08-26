const express = require("express");
const { travelValidation } = require("../../../validations");
const { travelController } = require("../../../controllers");
const validate = require("../../../middlewares/validate")

const router = express.Router();

//  create travel
router.post(
    "/create-travel",
    validate(travelValidation.createTravel),
    travelController.createTravel
);

//  get travel list
router.get(
    "/list",
    validate(travelValidation.getUserList),
    travelController.getTravelList
);

//  get travel details by Id
router.get(
    "/get-details/:travelId",
    validate(travelValidation.getDetails),
    travelController.getTravelDetails
);

//  Delete travel
router.delete(
    "/delete-travel/:travelName",
    validate(travelValidation.getDetails),
    travelController.deleteTravel
);

module.exports = router;