const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const grocerySchema = new mongoose.Schema(
    {
        shop_name: {
            type: String,
            trim: true,
        },
        stock: {
            type: Number,
            trim: true,
        },
        product_name: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Grocery = mongoose.model("grocery",grocerySchema);
module.exports = Grocery;