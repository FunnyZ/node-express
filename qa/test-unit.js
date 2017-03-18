/**
 * 单元测试
 */
var fortune = require('../lib/fortune'),
    expect = require('chai').expect;

suite('Fortune cookie tests', function() {
    test('getFortune() should return a fortune', function() {
        // expect/should 是BDD风格
        expect(typeof fortune.getFortune() === 'string');
    });
});