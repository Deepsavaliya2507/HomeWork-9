const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const busSchema = new mongoose.Schema(
    {
        bus_name: {
            type: String,
            trim: true,
        },
        bus_no: {
            type: Number,
            trim: true,
        },
        company_name: {
            type: String,
            trim: true,
        },
        total_bus: {
            type: Number,
            trim: true,
        },
        route: {
            type: String,
            trim: true,
        },
        total_seat: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Bus = mongoose.model("bus",busSchema);
module.exports = Bus;