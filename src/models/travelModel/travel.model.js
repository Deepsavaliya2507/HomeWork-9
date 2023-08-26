const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const travelSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            trim: true,
        },
        user_mobile_no: {
            type: Number,
            trim: true,
        },
        package: {
            type: String,
            trim: true,
        },
        company_name: {
            type: String,
            trim: true,
        },
        by_plane_or_train: {
            type: String,
            trim: true,
        },
        plane_or_train_no: {
            type: Number,
            trim: true,
        },
        start_point: {
            type: String,
            trim: true,
        },
        close_point: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Travel = mongoose.model("travel",travelSchema);
module.exports = Hotel;