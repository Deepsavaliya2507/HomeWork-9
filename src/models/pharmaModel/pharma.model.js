const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const pharmaSchema = new mongoose.Schema(
    {
        company_name: {
            type: String,
            trim: true,
        },
        stock: {
            type: Number,
            trim: true,
        },
        medicine_name: {
            type: String,
            trim: true,
        },
        factory_state: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Pharma = mongoose.model("pharma",pharmaSchema);
module.exports = Pharma;