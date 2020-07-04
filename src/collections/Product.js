const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

module.exports = mongoose.model("products", schema);