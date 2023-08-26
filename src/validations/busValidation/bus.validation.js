const Joi = require("joi");

//  create Bus
const createBus = {
    body: Joi.object().keys({
        bus_name: Joi.string().required().trim(),
        bus_no: Joi.number().integer(),
        company_name: Joi.string().required().trim(),
        route: Joi.string().required().trim(),
        total_seat: Joi.number().integer().required(),
        total_bus: Joi.number().integer().required(),
    }),
};

//  Get Bus details
const getBusList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get Bus details by name
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};



module.exports = {
    createBus,
    getBusList,
    getDetails,
}