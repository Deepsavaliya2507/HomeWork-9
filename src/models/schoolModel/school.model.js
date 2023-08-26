const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schoolSchema = new mongoose.Schema(
    {
        school_name: {
            type: String,
            trim: true,
        },
        branch_number: {
            type: Number,
            trim: true,
        },
        area: {
            type: String,
            trim: true,
        },
        faculty_name: {
            type: String,
            trim: true,
        },
        faculty_assign_subject: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const School = mongoose.model("school",schoolSchema);
module.exports = School;