var argv = require('optimist').argv;
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', {
        title: 'Express',
        source: argv.source || false
    });
};