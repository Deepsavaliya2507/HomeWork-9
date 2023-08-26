const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const movieSchema = new mongoose.Schema(
    {
        producer_name: {
            type: String,
            trim: true,
        },
        hero_name: {
            type: String,
            trim: true,
        },
        heroine_name: {
            type: String,
            trim: true,
        },
        movie_name: {
            type: String,
            trim: true,
        },
        hours: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Movie = mongoose.model("movie",movieSchema);
module.exports = Movie;