const express = require("express");
const { musicValidation } = require("../../../validations");
const { musicController } = require("../../../controllers");
const validate = require("../../../middlewares/validate")

const router = express.Router();

//  create music
router.post(
    "/create-music",
    validate(musicValidation.createMusic),
    musicController.createMusic
);

//  get music list
router.get(
    "/list",
    validate(musicValidation.getUserList),
    musicController.getMusicList
);

//  get music details by Id
router.get(
    "/get-details/:musicId",
    validate(musicValidation.getDetails),
    musicController.getMusicDetails
);

//  Delete music
router.delete(
    "/delete-music/:musicName",
    validate(musicValidation.getDetails),
    musicController.deleteMusic
);

module.exports = router;