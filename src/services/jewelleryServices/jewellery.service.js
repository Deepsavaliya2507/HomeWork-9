const Jewellery = require("../../models/jewelleryModel/jewellery.model");

//  create Jewellery
const createJewellery = async (reqBody) => {
    return Jewellery.create(reqBody);
};

//  get Jewellery list
const getJewelleryList = async (filter, options) => {
    return Jewellery.find({});
    // return Jewellery.find({$or: [{Jewellery_total_rooms: 10}]});
};

//  get Jewellery by Id
const getJewelleryById = async (JewelleryId) => {
    return Jewellery.findOne({ JewelleryId });
};

//  delete Jewellery
const deleteJewellery = async (JewelleryId) => {
    return JewelleryId.findByIaAndDelete(JewelleryId);
};

module.exports = {
    createJewellery,
    getJewelleryList,
    getJewelleryById,
    deleteJewellery,
}