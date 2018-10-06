var httpProxy = require('http-proxy');
httpProxy.createServer(80, 'www.google.com').listen(process.env.PORT || 8000, function() {
    console.log('Listening on port ' + process.env.PORT || 8000)
});