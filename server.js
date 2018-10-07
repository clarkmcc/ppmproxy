const AnyProxy = require('anyproxy');
const options = {
  port: 8001,
  webInterface: {
    enable: true,
    webPort: process.env.PORT
  },
  throttle: 10000,
  forceProxyHttps: false,
  wsIntercept: false,
  silent: false
};
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => { /* */ });
proxyServer.on('error', (e) => { /* */ });
proxyServer.start();

//when finished
proxyServer.close();