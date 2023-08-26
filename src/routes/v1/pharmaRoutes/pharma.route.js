const express = require("express");
const { pharmaValidation } = require("../../../validations");
const { pharmaController } = require("../../../controllers");
const validate = require("../../../middlewares/validate")

const router = express.Router();

//  create pharma
router.post(
    "/create-pharma",
    validate(pharmaValidation.createPharma),
    pharmaController.createPharma
);

//  get pharma list
router.get(
    "/list",
    validate(pharmaValidation.getUserList),
    pharmaController.getPharmaList
);

//  get pharma details by Id
router.get(
    "/get-details/:pharmaId",
    validate(pharmaValidation.getDetails),
    pharmaController.getPharmaDetails
);

//  Delete pharma
router.delete(
    "/delete-pharma/:pharmaName",
    validate(pharmaValidation.getDetails),
    pharmaController.deletePharma
);

module.exports = router;