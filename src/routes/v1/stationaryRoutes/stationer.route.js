const express = require("express");
const { stationeryValidation } = require("../../../validations");
const { stationeryController } = require("../../../controllers");
const validate = require("../../../middlewares/validate")

const router = express.Router();

//  create stationery
router.post(
    "/create-stationery",
    validate(stationeryValidation.createStationery),
    stationeryController.createStationery
);

//  get stationery list
router.get(
    "/list",
    validate(stationeryValidation.getUserList),
    stationeryController.getStationeryList
);

//  get stationery details by Id
router.get(
    "/get-details/:stationeryId",
    validate(stationeryValidation.getDetails),
    stationeryController.getStationeryDetails
);

//  Delete stationery
router.delete(
    "/delete-stationery/:stationeryName",
    validate(stationeryValidation.getDetails),
    stationeryController.deleteStationery
);

module.exports = router;