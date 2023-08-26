const Travel = require("../../models/TravelModel/Travel.model");

//  create Travel
const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
};

//  get Travel list
const getTravelList = async (filter, options) => {
    return Travel.find({});
};

//  get Travel by Id
const getTravelById = async (TravelId) => {
    return Travel.findOne({ TravelId });
};

//  delete Travel
const deleteTravel = async (TravelId) => {
    return TravelId.findByIaAndDelete(TravelId);
};

module.exports = {
    createTravel,
    getTravelList,
    getTravelById,
    deleteTravel,
}