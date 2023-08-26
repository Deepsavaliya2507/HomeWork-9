const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const jewellerySchema = new mongoose.Schema(
    {
        shop_name: {
            type: String,
            trim: true,
        },
        design_quantity: {
            type: Number,
            trim: true,
        },
        types: {
            type: String,
            trim: true,
        },
        branch_no: {
            type: Number,
            trim: true,
        },
        area: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Jewellery = mongoose.model("jewellery",jewellerySchema);
module.exports = Jewellery;