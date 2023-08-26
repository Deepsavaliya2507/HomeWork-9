const Joi = require("joi");

//  create Travel
const createTravel = {
    body: Joi.object().keys({
        user: Joi.string().required().trim(),
        user_mobil_no: Joi.number().integer(),
        package: Joi.string().required().trim(),
        company_name: Joi.string().required().trim(),
        by_plane_or_train: Joi.string().required().trim(),
        start_point: Joi.string().required().trim(),
        end_point: Joi.string().required().trim(),
        plane_or_train_no: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
    }),
};

//  Get Travel details
const getTravelList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get Travel details by name
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};



module.exports = {
    createTravel,
    getTravelList,
    getDetails,
}