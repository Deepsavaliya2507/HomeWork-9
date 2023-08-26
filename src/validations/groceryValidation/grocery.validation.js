const Joi = require("joi");

//  create Grocery
const createGrocery = {
    body: Joi.object().keys({
        shop_name: Joi.string().required().trim(),
        stock: Joi.number().integer(),
        product_name: Joi.string().required().trim(),
    }),
};

//  Get Grocery details
const getGroceryList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get Grocery details by name
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};



module.exports = {
    createGrocery,
    getGroceryList,
    getDetails,
}