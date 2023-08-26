const Joi = require("joi");

//  create Movie
const createMovie = {
    body: Joi.object().keys({
        producer_name: Joi.string().required().trim(),
        hero_name: Joi.string().required().trim(),
        heroine_name: Joi.string().required().trim(),
        movie_name: Joi.string().required().trim(),
        hours: Joi.number().integer().required(),
    }),
};

//  Get Movie details
const getMovieList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get Movie details by name
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};



module.exports = {
    createMovie,
    getMovieList,
    getDetails,
}