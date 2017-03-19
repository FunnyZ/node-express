/**
 * 关于的页面测试
 */
/* eslint-disable */
suite('"About" Page Tests', function() {
    test('page should contain link to contact page', function() {
        assert($('a[href]="/contact"').length);
    });
});