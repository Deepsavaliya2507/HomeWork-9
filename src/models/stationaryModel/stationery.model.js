const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const stationerySchema = new mongoose.Schema(
    {
        Stationery_name: {
            type: String,
            trim: true,
        },
        Stationery_area: {
            type: String,
            trim: true,
        },
        product_name: {
            type: String,
            trim: true,
        },
        product_company_name: {
            type: Number,
            trim: true,
        },
        stock: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Stationery = mongoose.model("stationery",stationerySchema);
module.exports = Stationery;