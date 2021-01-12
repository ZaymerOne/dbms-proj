const { createProxyMiddleware: proxy } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api', { target: 'http://127.0.0.1:8089/' }));
    app.use(proxy('/uploads', { target: 'http://127.0.0.1:8089/' }));
}
