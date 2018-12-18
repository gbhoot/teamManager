var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teamManager');

module.exports = mongoose;