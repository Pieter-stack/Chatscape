var http = require("http");

//creating our server
var server = http.createServer();
fs=require("fs");

//our list of users that have logged in
var users = [];
var history = null;


//initiated our socket
var io = require("socket.io")(server);

//listen for a connection from our Client Socket
io.on("connection", (socket) => {
    
    console.log("A Client connected: " + socket.id);

//listen for client login request

socket.on("login:request",(loginData) =>{
    //add the new user login in to our users list
    users.push(loginData.username);
    console.log(loginData.username + " requests login premission.");



});
socket.on("userlist:request", (message) =>{
    io.emit("user:list", users);
    });



//listen for history
socket.on("history:request", (message) =>{
    //TODO validation
    
    
    socket.emit("history:response",history);
    });
    
    getHistory();
    
    // listen for new messages
    socket.on("message:sent",(newMessage) =>{
        //add it to my history array
        history.push(newMessage);
        addToHistory();
    
        //Send the new message to all of our clients
        io.emit("new:message",newMessage);
    });
});

    
    //function is to get my message history from history.txt
    var getHistory = function(){
        if(history === null){
          history =  JSON.parse(fs.readFileSync("history.txt", "utf-8"));
        }
    }
    
    //function to update our message history in history.txt
    var addToHistory = function(){
        fs.writeFile("history.txt",JSON.stringify(history),function(err){
            if(err) throw err;
        })
    }

//host the server on 8888
server.listen(8888, function(){
    console.log("Listening on port 8888...");
});
