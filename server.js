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

var connect = require('express');
var app = express();

app.use('/', function(req,res) {
    res.send('Hello World');
});
app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;