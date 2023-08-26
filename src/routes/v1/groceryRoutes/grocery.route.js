const express = require("express");
const { groceryValidation } = require("../../../validations");
const { groceryController } = require("../../../controllers");
const validate = require("../../../middlewares/validate")

const router = express.Router();

//  create grocery
router.post(
    "/create-grocery",
    validate(groceryValidation.createGrocery),
    groceryController.createGrocery
);

//  get grocery list
router.get(
    "/list",
    validate(groceryValidation.getUserList),
    groceryController.getGroceryList
);

//  get grocery details by Id
router.get(
    "/get-details/:groceryId",
    validate(groceryValidation.getDetails),
    groceryController.getGroceryDetails
);

//  Delete grocery
router.delete(
    "/delete-grocery/:groceryName",
    validate(groceryValidation.getDetails),
    groceryController.deleteGrocery
);

module.exports = router;