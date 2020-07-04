const mongoose = require("mongoose");

// Enable mongoose work Promise javascript.
mongoose.Promise = Promise;

const connection = mongoose.connect(process.env.URL_DATABASE);

module.exports = connection;