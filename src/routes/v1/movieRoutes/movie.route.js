const express = require("express");
const { movieValidation } = require("../../../validations");
const { movieController } = require("../../../controllers");
const validate = require("../../../middlewares/validate")

const router = express.Router();

//  create movie
router.post(
    "/create-movie",
    validate(movieValidation.createMovie),
    movieController.createMovie
);

//  get movie list
router.get(
    "/list",
    validate(movieValidation.getUserList),
    movieController.getMovieList
);

//  get movie details by Id
router.get(
    "/get-details/:movieId",
    validate(movieValidation.getDetails),
    movieController.getMovieDetails
);

//  Delete movie
router.delete(
    "/delete-movie/:movieName",
    validate(movieValidation.getDetails),
    movieController.deleteMovie
);

module.exports = router;