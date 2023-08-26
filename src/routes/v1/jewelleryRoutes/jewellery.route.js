const express = require("express");
const { jewelleryValidation } = require("../../../validations");
const { jewelleryController } = require("../../../controllers");
const validate = require("../../../middlewares/validate")

const router = express.Router();

//  create jewellery
router.post(
    "/create-jewellery",
    validate(jewelleryValidation.createJewellery),
    jewelleryController.createJewellery
);

//  get jewellery list
router.get(
    "/list",
    validate(jewelleryValidation.getUserList),
    jewelleryController.getJewelleryList
);

//  get jewellery details by Id
router.get(
    "/get-details/:jewelleryId",
    validate(jewelleryValidation.getDetails),
    jewelleryController.getJewelleryDetails
);

//  Delete jewellery
router.delete(
    "/delete-jewellery/:jewelleryName",
    validate(jewelleryValidation.getDetails),
    jewelleryController.deleteJewellery
);

module.exports = router;