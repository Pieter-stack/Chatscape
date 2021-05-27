var http = require("http");


//creating server
var server = http.createServer();

//initiate socket
var io = require("socket.io")(server);
// var i =0;
//listen for connection from client socket
io.on("connection",(socket) =>{
    console.log("A Client connected" + socket.id);
// i++;
//send a message to clients as the joined keyword
//    socket.emit('joined',"Welcome"+i);

 });

//host server on port 8888
server.listen(8888, function(){
    console.log("listening on port 8888...")
});