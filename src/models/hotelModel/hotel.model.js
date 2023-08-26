const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const hotelSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            trim: true,
        },
        user_mobile_no: {
            type: Number,
            trim: true,
        },
        user_email: {
            type: String,
            trim: true,
        },
        hotel_name: {
            type: String,
            trim: true,
        },
        hotel_area: {
            type: String,
            trim: true,
        },
        hotel_total_rooms: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Hotel = mongoose.model("hotel",hotelSchema);
module.exports = Hotel;