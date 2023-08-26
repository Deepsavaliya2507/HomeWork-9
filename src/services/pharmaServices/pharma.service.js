const Pharma = require("../../models/pharmaModel/pharma.model");

//  create Pharma
const createPharma = async (reqBody) => {
    return Pharma.create(reqBody);
};

//  get Pharma list
const getPharmaList = async (filter, options) => {
    return Pharma.find({});
    // return Pharma.find({$or: [{Pharma_total_rooms: 10}]});
};

//  get Pharma by Id
const getPharmaById = async (PharmaId) => {
    return Pharma.findOne({ PharmaId });
};

//  delete Pharma
const deletePharma = async (PharmaId) => {
    return PharmaId.findByIaAndDelete(PharmaId);
};

module.exports = {
    createPharma,
    getPharmaList,
    getPharmaById,
    deletePharma,
}