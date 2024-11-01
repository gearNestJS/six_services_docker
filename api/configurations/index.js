module.exports.port = process.env.PORT || 3000;
module.exports.host = process.env.HOST || 'http://localhost';
module.exports.db = process.env.MONGODB_URL || 'mongodb://localhost:27017/api';