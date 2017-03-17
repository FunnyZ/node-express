/**
 * 跨页测试
 */
var Browser = require('zombie'),
    assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function() {
    // 测试框架运行每个测试之前都会执行setup里的函数
    setup(function() {
        browser = new Browser();
    });

    test('requesting a group rate quote from the beijing tour page should populate the referrer field', function(done) {
        var referrer = 'http://localhost:3000/tours/beijing-city';  // 从哪跳转过来的
        browser.visit(referrer, function() { // 访问referrer页面
            browser.click('.requestGroupRate', function() { // 点击class为requestGroupRate
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('requesting a group rate from the oregon coast tour page should populate the referrer field', function(done) {
        var referrer = 'http://localhost:3000/tours/oregon-coast';  // 从哪跳转过来的
        browser.visit(referrer, function() { // 访问referrer页面
            browser.click('.requestGroupRate', function() { // 点击class为requestGroupRate
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('visiting the "request group rate" page dirctly should result in an empty referrer field', function(done) {
        browser.visit('http://localhost:3000/tours/request-group-rate', function() { // 访问referrer页面
           assert(browser.field('referrer').value === '');
           done();
        });
    });
});