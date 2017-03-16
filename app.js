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

routes(app);

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});