var path = require('path'),
    players = require('../controllers/players.js');

module.exports = function(app) {
    app.get('/db/v1/players', function(req, res) {
        players.getAll(req, res);
    });

    app.get('/db/v1/players/:id', function(req, res) {
        players.getOne(req, res);
    });

    app.post('/db/v1/players', function(req, res) {
        players.create(req, res);
    });

    app.delete('/db/v1/players', function(req, res) {
        players.destroyAll(req, res);
    });

    app.delete('/db/v1/players/:id', function(req, res) {
        players.destroyOne(req, res);
    });

    app.put('/db/v1/players/:id', function(req, res) {
        players.updateStatus(req, res);
    });

    app.all("*", function(req, res) {
        res.sendFile(path.resolve(__dirname, '../../public/dist/public/index.html'));
    });
}