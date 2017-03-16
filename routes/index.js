/**
 * 路由
 */
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];
module.exports = function(app) {

    app.get('/', function(req, res, next) {
       res.render('home');
    });

    app.get('/about', function(req, res, next) {
       var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
       res.render('about', { fortune: randomFortune });
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