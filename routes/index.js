/**
 * 路由
 * req 请求对象
 * req.params req.body req.query req.route req.cookies/req.singnedCookies req.headers req.accepts([types]) req.ip req.path req.url/req.OriginalUrl
 *  req.host req.xhr req.protocol req.secure req.acceptedLanguages
 * res 响应对象
 * res.status(code) res.set(name, value) res.cookie(name, value, [options]) res.clearCookie(name, [options]) res.redirect([status], url)
 * res.send(body)/res.send(status, body) res.json(json)/res.json(status, json) res.jsonp(josn)/res.jsonp(status, json) res.type(type)
 * res.format(object) res.attachment([filename])/res.download(path, [filename], [callback]) res.sendFile(path, [option], [callback]) res.links(links)
 * res.locals/res.render(view, [locals], [callback])
 */
var fortune = require('../lib/fortune.js');

module.exports = function (app) {

    app.get('/', function (req, res, next) {
        res.render('home');
    });

    app.get('/about', function (req, res, next) {
        res.render('about', { fortune: fortune.getFortune(), pageTestScript: '/vendor/qa/tests-about.js' });
    });

    app.get('/tours/beijing-city', function (req, res, next) {
        res.render('tours/beijing-city');
    });

    app.get('/tours/request-group-rate', function (req, res, next) {
        res.render('tours/request-group-rate');
    });

    // 404 catch-all 处理器（中间件）
    app.use(function (req, res, next) {
        res.status(404);
        res.render('404');
    });

    // 500 错误处理器（中间件）
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500);
        res.render('500');
    });
};