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

var hellloWorld = function(req,res,next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

var hellloWorld2 = function(req,res,next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World2');
};

app.use(hellloWorld);
app.use(hellloWorld2);
app.listen(3000);
console.log('Server running at http://localhost:3000/');