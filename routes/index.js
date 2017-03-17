/**
 * 路由
 */
var fortune = require('../lib/fortune.js');

module.exports = function(app) {

    app.get('/', function(req, res, next) {
       res.render('home');
    });

    app.get('/about', function(req, res, next) {
       res.render('about', { fortune: fortune.getFortune(), pageTestScript: '/vendor/qa/tests-about.js' });
    });

    // 404 catch-all 处理器（中间件）
    app.use(function(req, res, next) {
        res.status(404);
        res.render('404');
    });

    // 500 错误处理器（中间件）
    app.use(function(err, req, res, next) {
        console.error(err.stack);
        res.status(500);
        res.render('500');
    });
};