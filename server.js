// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type' : 'text/plain'
//     });
//     res.end('Hello World');    
// }).listen(3000);

// console.log('Server running at http://localhost:3000/');
// console.log('Server running at http://localhost:3000/');
// console.log('Server running at http://localhost:3000/');

// console.log('Server running at http://localhost:3000/');

var connect = require('connect');
var app = connect();

var logger = function(req,res,next){
    console.log(req.method, req.url);
    next();
};

var hellloWorld = function(req,res,next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};


app.use(logger);
app.use(hellloWorld);

app.listen(3000);
console.log('Server running at http://localhost:3000/');