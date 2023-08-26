const Joi = require("joi");

//  create School
const createSchool = {
    body: Joi.object().keys({
        school_name: Joi.string().required().trim(),
        branch_number: Joi.number().integer(),
        area: Joi.string().required().trim(),
        faculty_name: Joi.string().required().trim(),
        faculty_assign_subject: Joi.string().required().trim(),
    }),
};

//  Get School details
const getSchoolList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get School details by name
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};



module.exports = {
    createSchool,
    getSchoolList,
    getDetails,
}