const express = require("express");
const { schoolValidation } = require("../../../validations");
const { schoolController } = require("../../../controllers");
const validate = require("../../../middlewares/validate")

const router = express.Router();

//  create school
router.post(
    "/create-school",
    validate(schoolValidation.createSchool),
    schoolController.createSchool
);

//  get school list
router.get(
    "/list",
    validate(schoolValidation.getUserList),
    schoolController.getSchoolList
);

//  get school details by Id
router.get(
    "/get-details/:schoolId",
    validate(schoolValidation.getDetails),
    schoolController.getSchoolDetails
);

//  Delete school
router.delete(
    "/delete-school/:schoolName",
    validate(schoolValidation.getDetails),
    schoolController.deleteSchool
);

module.exports = router;