const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ytmusic');
mongoose.Promise = global.Promise;

module.exports = mongoose;