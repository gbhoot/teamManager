var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session')({
        secret: "sssssssssssssssshhhh",
        autoSave: true,
        resave: false,
        saveUninitialized: true
    }),
    flash = require('express-flash');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
require('./server/config/routes.js')(app);

app.listen(8000);

// Sockets
// require('./server/config/socket.js')(server);