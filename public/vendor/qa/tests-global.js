// TDD 测试风格
/* eslint-disable */
suite('Global Tests', function() {
    test('page has a valid title', function() {
        // assert 是TDD风格
        assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
    });
});