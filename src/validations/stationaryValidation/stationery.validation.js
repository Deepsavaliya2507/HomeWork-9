const Joi = require("joi");

//  create Stationery
const createStationery = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        stock: Joi.number().integer(),
        product_company_name: Joi.string().required().trim(),
        Stationery_name: Joi.string().required().trim(),
        Stationery_area: Joi.string().required().trim(),
    }),
};

//  Get Stationery details
const getStationeryList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get Stationery details by name
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};



module.exports = {
    createStationery,
    getStationeryList,
    getDetails,
}