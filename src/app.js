var app = require('express')();  //init express lib
var http = require('http'); 	// http module of node 
var server = http.Server(app); // making a server
var io = require("socket.io")(server); // passing the server to the instance of socket.io
app.get('/', function(req, res){  // telling the server to render the following folder on localhost:PORT/
  res.sendFile(__dirname + '/index.html');
});

io.on("connection",function(socket){
;	socket.on("newMsg",function(msg){
		socket.broadcast.emit("msg",msg);
	});
});


server.listen(8000, function(){
  console.log('listening on *:8000');
});