require('node-jsx').install({extension: '.jsx'});
var fs = require('fs');
var express = require('express');
var React = require('react');
var CommentBox = React.createFactory(require('../public/javascripts/components/CommentBox'));

var router = express.Router();

function getData(callback){
    fs.readFile('./public/data/data.json', 'utf8', function(err, data){
        if(err) return callback(err);
        var obj = JSON.parse(data);
        callback(null, obj);
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
    getData(function(err, data) {
        if (err) throw err;
        var componentData = { url: req.protocol + '://' + req.get('host') + '/data/data.json', data: data };
        var html = React.renderToString(CommentBox(componentData));
        res.render('index', { html: html, data: componentData });
    });
});

module.exports = router;
