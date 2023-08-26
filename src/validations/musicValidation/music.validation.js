const Joi = require("joi");

//  create Music
const createMusic = {
    body: Joi.object().keys({
        artist_name: Joi.string().required().trim(),
        total_song: Joi.number().integer(),
        song_name: Joi.string().required().trim(),
        song_type: Joi.string().required().trim(),
    }),
};

//  Get Music details
const getMusicList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get Music details by name
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};



module.exports = {
    createMusic,
    getMusicList,
    getDetails,
}