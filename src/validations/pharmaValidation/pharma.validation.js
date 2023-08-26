const Joi = require("joi");

//  create Pharma
const createPharma = {
    body: Joi.object().keys({
        company_name: Joi.string().required().trim(),
        stock: Joi.number().integer(),
        medicine_name: Joi.string().required().trim(),
        factory_state: Joi.string().required().trim(),
    }),
};

//  Get Pharma details
const getPharmaList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get Pharma details by name
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};



module.exports = {
    createPharma,
    getPharmaList,
    getDetails,
}