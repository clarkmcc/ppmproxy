var httpProxy = require('http-proxy');
httpProxy.createServer(80, 'ppmproxy.herokuapp.com').listen(process.env.PORT || 8000, function() {
    console.log('Listening on port ' + process.env.PORT || 8000)
});