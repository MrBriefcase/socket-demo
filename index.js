var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.set('port', process.env.PORT || 5000);

// ALLOW ACCESS *************
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://socketpractice.herokuapp.com");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    res.send('Port is: ' + hold);
});


var hold = app.get('port');
server.listen(app.get('port'), function(){
    //success
    console.log('Port is: ' + hold);
});  