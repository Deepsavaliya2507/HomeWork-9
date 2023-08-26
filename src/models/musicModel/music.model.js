const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const musicSchema = new mongoose.Schema(
    {
        artist_name: {
            type: String,
            trim: true,
        },
        total_song: {
            type: Number,
            trim: true,
        },
        song_name: {
            type: String,
            trim: true,
        },
        song_type: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Music = mongoose.model("music",musicSchema);
module.exports = Music;