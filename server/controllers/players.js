var Player = require('../models/player.js');

module.exports = {
    getAll: function(req, res) {
        Player.find({}, function(error, players) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                    players: players
                };
                res.json(response);
            };
        });
    },

    getOne: function(req, res) {
        let pid = req.params.id;
        Player.find({_id: pid}, function(error, player) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                    player: player
                };
                res.json(response);
            };
        });
    },

    create: function(req, res) {
        let inc_player = req.body;
        let player = new Player(inc_player);
        player.save(function(error) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                };
                res.json(response);
            };
        });
    },

    destroyAll: function(req, res) {
        Player.deleteMany({}, function(error) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                };
                res.json(response);
            };
        });
    },

    destroyOne: function(req, res) {
        let pid = req.params.id;
        Player.deleteOne({_id: pid}, function(error) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                };
                res.json(response);
            };
        });
    },
    
    updateStatus: function(req, res) {
        let pid = req.params.id;
        let inc_player = req.body;
        let opts = { runValidators: true};
        Player.update({_id: pid}, inc_player, opts, function(error) {
            if (error) {
                console.log("There was an issue: ", error);
                res.json(error);
            } else {
                let response = {
                    message: "Success",
                };
                res.json(response);
            };
        });
    },
}