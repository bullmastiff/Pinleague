module.exports = function(app) {

    var config  = require('../config'),
        _       = require('underscore')

    app.get('/', function(req, res) {

            res.render('pages/home');

    });
};
