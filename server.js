/**
 * Created by Robert on 3/7/2015.
 */
var app = require('./app');

var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
})