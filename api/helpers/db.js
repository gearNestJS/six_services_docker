const mongoose = require('mongoose');
const { db } = require('../configurations');

module.exports.connectDB = () => {
    mongoose.connect(db);

    return mongoose.connection;
}