const Joi = require("joi");

//  create hotel
const createHotel = {
    body: Joi.object().keys({
        user: Joi.string().required().trim(),
        user_mobil_no: Joi.number().integer(),
        user_email: Joi.string().required().trim(),
        hotel_name: Joi.string().required().trim(),
        hotel_area: Joi.string().required().trim(),
        hotel_total_rooms: Joi.number().integer().required(),
    }),
};

//  Get hotel details
const getHotelList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get hotel details by name
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};



module.exports = {
    createHotel,
    getHotelList,
    getDetails,
}