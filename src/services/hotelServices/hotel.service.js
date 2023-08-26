const Hotel = require("../../models/hotelModel/hotel.model");

//  create hotel
const createHotel = async (reqBody) => {
    return Hotel.create(reqBody);
};

//  get hotel list
const getHotelList = async (filter, options) => {
    return Hotel.find({});
    // return Hotel.find({$or: [{hotel_total_rooms: 10}]});
};

//  get hotel by Id
const getHotelById = async (hotelId) => {
    return Hotel.findOne({ hotelId });
};

//  delete hotel
const deleteHotel = async (hotelId) => {
    return hotelId.findByIaAndDelete(hotelId);
};

module.exports = {
    createHotel,
    getHotelList,
    getHotelById,
    deleteHotel,
}