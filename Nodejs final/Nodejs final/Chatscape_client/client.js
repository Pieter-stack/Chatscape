var http = require("http");
var querystring = require("querystring");
var fs = require("fs");
var templates = require("es6-template-strings");

//host my files
var static = require("node-static");
var fileServer = new static.Server("./public");


//init my client socket
var io = require("socket.io-client");
//connect client to server
var socket = io("http://localhost:8888/", {transports:['websocket']});


//function to respond with the form on GET request
var handleFormGet = function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    
    //fs
    fs.readFile("templates/form.html", "utf8", function(err, data) {
        if(err) {throw err;}

        response.write(data);
        response.end();
    });
    
}


//function to respond with welcoming message on POST request
var handleFormPost = function(request, response){

    response.writeHead(200, {"Content-Type": "text/html"});

    var payload = "";

    //event on our request's data
    request.on("data", function(data) {
        payload += data;
    });

  
    //event on our request's end
    request.on("end", function() {

        response.writeHead(200, {"Content-Type": "text/html"});

        var post = querystring.parse(payload);

        //request login on server
            socket.emit("login:request",post);
        




        fs.readFile("templates/home.html", "utf8", function(err, data) {
            if(err) {throw err;}


            //compile template first to include our JS post data
            var compiled = templates(data, {username: post["username"]});

            response.end(compiled);
            
        });

    });

}








//creating our server
var server = http.createServer();


var simpleRouter = function(request) {
    var method = request.method;
    var path = request.url;


    //handle the query
    var queryIndex = path.indexOf("?");
    if(queryIndex >= 0) {
        path = request.url.slice(0, queryIndex);
    }

    //the route that our user entered
    var suppliedRoute = {method: method, path: path};


    //the routes we can navigate our user to
    var routes = [
        {method: "GET", path: "/", handler: handleFormGet},
        {method: "POST", path: "/chats", handler: handleFormPost},
    ];

    for(var i = 0; i < routes.length; i++) {
        var route = routes[i];
        if(route.method === suppliedRoute.method && route.path === suppliedRoute.path){
            return route.handler;
        }
    }
    return null;


}

//on request event occurs
server.on("request", function(request, response){

    var handler = simpleRouter(request);

    if(handler != null) {
        handler(request, response);
    } else {
        fileServer.serve(request,response,function(e,res){
            if( e && (e.status === 404)){
                fileServer.serveFile('../templates/home.html', 404,{},request,response); 
            };
        });
    };
});

//listen or PORT 3000
server.listen(3000, function(){
    console.log("Listening on port 3000...");
});