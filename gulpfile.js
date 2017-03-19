/**
 * gulp.task 定义一系列的任务，将一个数组（如['build']）作为第二个参数传递给 gulp.task，可以定义这个任务的依赖，在执行这个任务之前先执行它依赖的任务
 * gulp.src 读取文件
 * gulp.dest 输出处理后的文件
 * gulp.watch 监听文件的更改
 */
var gulp = require('gulp'),
    util = require('gulp-util'),
    eslint = require('gulp-eslint'),
    Crawler = require('simplecrawler');

var paths = {
    allJS: './**/*.js?(x)',
    gulpFile: 'gulpfile.js'
};

// 代码检查
gulp.task('lint', function() {
    return gulp.src([
        paths.allJS,
        paths.gulpFile,
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

// 链接检查 （未测试到效果）
gulp.task('checkLinks', function() {
    Crawler('http://localhost:3000/')
        .on('fetch404', function(queueItem, response) {
            util.log('Resource not found linked from ' + queueItem.referrer + ' to', queueItem.url);
            util.log('Status code: ' + response.statusCode);
        })
        .on('complete', function(queueItem) {
            console.log(queueItem);
        });
});

gulp.task('watch', function() {
    gulp.watch(paths.allJS, ['lint', 'checkLinks']);
});

// 直接从命令行调用gulp 默认运行 default 任务
gulp.task('default', ['watch']);