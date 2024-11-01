const mongoose = require('mongoose');
const { DB } = require('../configurations');

module.exports.connectDB = () => {
    mongoose.connect(DB);

    return mongoose.connection;
}