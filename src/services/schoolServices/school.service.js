const School = require("../../models/schoolModel/school.model");

//  create School
const createSchool = async (reqBody) => {
    return School.create(reqBody);
};

//  get School list
const getSchoolList = async (filter, options) => {
    return School.find({});
    // return School.find({$or: [{School_total_rooms: 10}]});
};

//  get School by Id
const getSchoolById = async (SchoolId) => {
    return School.findOne({ SchoolId });
};

//  delete School
const deleteSchool = async (SchoolId) => {
    return SchoolId.findByIaAndDelete(SchoolId);
};

module.exports = {
    createSchool,
    getSchoolList,
    getSchoolById,
    deleteSchool,
}