const Joi = require("joi");

//  create Jewellery
const createJewellery = {
    body: Joi.object().keys({
        shop_name: Joi.string().required().trim(),
        design_quantity: Joi.number().integer(),
        types: Joi.string().required().trim(),
        area: Joi.string().required().trim(),
        branch_no: Joi.number().integer().required(),
    }),
};

//  Get Jewellery details
const getJewelleryList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get Jewellery details by name
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};



module.exports = {
    createJewellery,
    getJewelleryList,
    getDetails,
}