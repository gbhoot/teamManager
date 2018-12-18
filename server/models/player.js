var mongoose = require('../config/mongoose.js');
var PlayerSchema = new mongoose.Schema({
    fName: {type: String, required: [true, "Please enter player's first name"], 
        minlength: [2, "Player's first name should contain at least 2 characters"]},
    lName: {type: String, required: [true, "Please enter player's last name"], 
        minlength: [2, "Player's last name should contain at least 2 characters"]},
    position: {type: String, required: [true, "Player should have a positional role"]},
    role: {type: String, required: [true, "Player should have a positional role"]},
    statusGame1: {type: Number, default: 0},
    statusGame2: {type: Number, default: 0},
    statusGame3: {type: Number, default: 0},
}, {timestamps: true});

var Players = mongoose.model('Player', PlayerSchema);

module.exports = Players;