var http = require("http");
var templates = require("es6-template-strings");
var fs = require('fs');
var querystring = require("querystring");

var server = http.createServer();

var simpleRouter = function(request){
    var method = request.method;
    var path = request.url;

    var queryIndex = request.url.indexOf('?');
    if(queryIndex >= 0){
        path = request.url.slice(0, queryIndex)
    }

    var suppliedRoute = {method: method, path : path};

    var routes =[
        {method: "GET", path: '/', handler: handleFormGet},
        {method: "POST", path: '/', handler: handleFormPost}
    ];

    for(var i=0; i < routes.length; i++){
        var route = routes[i];
        if(route.method === suppliedRoute.method &&
            route.path === suppliedRoute.path){
                return route.handler;
            }
    }
    return null;
}


//function to respond with form on GET request
var handleFormGet = function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("templates/form.html","utf8",function(err,data){
        if(err) {throw err;}
        response.write(data);
        response.end();
    });

}

var handleFormError = function(request,response){
    fs.readFile("templates/failedform.html" , "utf8", function(err,data){
        if(err) {throw err;}
        response.write(data);
        response.end();
    });

}

var handleFormPost = function(request,response){
    response.writeHead(200, {"Content-Type": "text/html"});
var payload =  '';


    request.on("data",function(data){
        payload += data;

    });



    request.on("end",function(){
        var post = querystring.parse(payload);




if((post["email"] === "john@doe.com" && post["password"] === "john1234") || (post["email"] === "sannie@koekemoer.com" && post["password"] === "sannie1234")){
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<body>');
        response.write('<h3>Hi ' + post['email'] + "</h3>");
        response.write('</body>');
        response.write('</html>');
}else{
    handleFormError(request,response);
}



    });

}





//creating server


//function to respond with form on GET request
server.on("request",function(request,response){
    var handler = simpleRouter(request);
    if(handler != null){
        handler(request,response);
    }else{
        response.writeHead(404);
        response.end();
    }
    });


server.listen(8888, function(){
    console.log("listening on port 8888...")
});