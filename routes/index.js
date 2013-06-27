var argv = require('optimist').argv;
/*
 * GET home page.
 */

exports.index = function(req, res){
    var componentsHost = !argv.source ? 'http://devices.herokuapp.com' : 'http://localhost:3000';

    res.render('index', {
        title: 'WebPonents',
        componentsHost: componentsHost
    });
};