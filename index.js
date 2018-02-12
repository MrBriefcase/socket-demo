const server = require("http").Server();
const port = process.env.PORT || 5000;

alert('port is ' + port);

var io = require("socket.io")(server);

//this sends a message called joined
io.on("connection", function(socket){
    io.emit("joined");
	socket.on("typing", function(){
		socket.broadcast.emit("isTyping");
	});
});

server.listen(port, function(err){
    if (err){
        console.log("there is a problem");
        return false;
    }
    else{
        console.log("all good head over to the server");
    }
});


