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
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');
    
var db = mongoose();
var app = express(db);
var passport = passport();

app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;