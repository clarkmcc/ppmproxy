var http = require('http');
var setup = require('proxy');

var server = setup(http.createServer());
server.listen(process.env.PORT, function () {
  var port = server.address().port;
  console.log('HTTP(s) proxy server listening on port %d', process.env.PORT);
});