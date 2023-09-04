var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("I am a MIT ADT SOC LY IT CORE 2 Student")
    res.end();
  }).listen(8080);