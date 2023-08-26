const Stationery = require("../../models/stationaryModel/stationery.model");

//  create Stationery
const createStationery = async (reqBody) => {
    return Stationery.create(reqBody);
};

//  get Stationery list
const getStationeryList = async (filter, options) => {
    return Stationery.find({});
    // return Stationery.find({$or: [{Stationery_total_rooms: 10}]});
};

//  get Stationery by Id
const getStationeryById = async (StationeryId) => {
    return Stationery.findOne({ StationeryId });
};

//  delete Stationery
const deleteStationery = async (StationeryId) => {
    return StationeryId.findByIaAndDelete(StationeryId);
};

module.exports = {
    createStationery,
    getStationeryList,
    getStationeryById,
    deleteStationery,
}