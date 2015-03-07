/**
 * Created by Robert on 3/7/2015.
 */
var fs = require('fs');
var express = require('express');
var path = require('path');
var uuid = require('node-uuid');

var router = express.Router();

var dataPath = './public/data/data.json';

function validateUuid(uuid){
    return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89ABab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(uuid);
}

function getData(callback){
    fs.readFile(dataPath, 'utf8', function(err, data){
        if(err) return callback(err);
        var obj = JSON.parse(data);
        callback(null, obj);
    });
}

function saveData(data, callback){
    fs.writeFile(dataPath, JSON.stringify(data, null, 4), function(err){
        callback(err);
    });
}

/* POST data. */
router.post('/data.json', function(req, res, next) {
    var comment = req.body;
    if(!validateUuid(comment.id)){
        comment.id = uuid.v4();
    }

    getData(function(err, comments){
        if(err) throw err;
        comments.splice(comments.length, 0, comment);
        saveData(comments, function(err){
            if(err)throw err;

            if(req.xhr) {
                res.status(200).json(comments);
            }
            else {
                res.redirect(303, '/');
            }
        });
    });
});

module.exports = router;
