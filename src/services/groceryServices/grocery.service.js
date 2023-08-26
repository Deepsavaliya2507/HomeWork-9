const Grocery = require("../../models/groceryModel/grocery.model");

//  create Grocery
const createGrocery = async (reqBody) => {
    return Grocery.create(reqBody);
};

//  get Grocery list
const getGroceryList = async (filter, options) => {
    return Grocery.find({});
    // return Grocery.find({$or: [{Grocery_total_rooms: 10}]});
};

//  get Grocery by Id
const getGroceryById = async (GroceryId) => {
    return Grocery.findOne({ GroceryId });
};

//  delete Grocery
const deleteGrocery = async (GroceryId) => {
    return GroceryId.findByIaAndDelete(GroceryId);
};

module.exports = {
    createGrocery,
    getGroceryList,
    getGroceryById,
    deleteGrocery,
}