const Bus = require("../../models/busModel/bus.model");

//  create Bus
const createBus = async (reqBody) => {
    return Bus.create(reqBody);
};

//  get Bus list
const getBusList = async (filter, options) => {
    return Bus.find({});
    // return Bus.find({$or: [{Bus_total_rooms: 10}]});
};

//  get Bus by Id
const getBusById = async (BusId) => {
    return Bus.findOne({ BusId });
};

//  delete Bus
const deleteBus = async (BusId) => {
    return BusId.findByIaAndDelete(BusId);
};

module.exports = {
    createBus,
    getBusList,
    getBusById,
    deleteBus,
}