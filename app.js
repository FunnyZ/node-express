var express = require('express'),
    path = require('path'),
    handlebars = require('express-handlebars').create({ defaultLayout: 'main' });   // 指明了默认布局，非特别指明，所有的视图用的都是这个布局

var routes = require('./routes');

var app = express();

// 设置port
app.set('port', process.env.PORT || 3000);
// 创建视图引擎
app.engine('handlebars', handlebars.engine);
// 设置视图路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// static 中间件可以将一个或多个目录指派为包含静态资源的目录，其中的资源不经过任何特殊处理直接发送到客户端
// static 中间件相当于给要发送的所有静态文件创建了一个路由，渲染文件并发送给客户端
app.use(express.static(path.join(__dirname, '/public')));

// 必需在所有路由定义之前，作用是：判断测试是否启用
app.use(function(req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

routes(app);

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});