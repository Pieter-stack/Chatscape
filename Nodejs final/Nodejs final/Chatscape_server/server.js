var http = require("http");

//creating our server
var server = http.createServer();

//our list of users that have logged in
var users = [];

//initiated our socket
var io = require("socket.io")(server);

//listen for a connection from our Client Socket
io.on("connection", (socket) => {
    
    console.log("A Client connected: " + socket.id);

//listen for client login request

socket.on("login:request",(loginData) =>{
    //TODO : authentication
    //add the new user login in to our users list
    users.push(loginData.username);
    console.log(loginData.username + " requests login premission.");

console.log(username)

});
socket.on("userlist:request", (message) =>{
//respond with trhe user list to all clients
io.emit("user:list", users);
});

});

//host the server on 8888
server.listen(8888, function(){
    console.log("Listening on port 8888...");
});


// socket.on("privatemes:request",(message) =>{
//     io.emit("terugmes:respond",message2);
//     socket.emit("terugmes:respond",message2);
// });