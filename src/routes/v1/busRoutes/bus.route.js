const express = require("express");
const { busValidation } = require("../../../validations");
const { busController } = require("../../../controllers");
const validate = require("../../../middlewares/validate")

const router = express.Router();

//  create bus
router.post(
    "/create-bus",
    validate(busValidation.createBus),
    busController.createBus
);

//  get bus list
router.get(
    "/list",
    validate(busValidation.getUserList),
    busController.getBusList
);

//  get bus details by Id
router.get(
    "/get-details/:busId",
    validate(busValidation.getDetails),
    busController.getBusDetails
);

//  Delete bus
router.delete(
    "/delete-bus/:busName",
    validate(busValidation.getDetails),
    busController.deleteBus
);

module.exports = router;