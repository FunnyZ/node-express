var fortunesCookies = [
    '过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。 —— 巴尔扎克',
    '最甜美的是爱情，最苦涩的也是爱情。 —— 菲·贝利',
    '一件事实是一条没有性别的真理。 —— 纪伯伦',
    '友谊是一棵可以庇荫的树。 —— 柯尔律治',
    '我读的书愈多，就愈亲近世界，愈明了生活的意义，愈觉得生活的重要。 —— 高尔基',
];

module.exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortunesCookies.length);
    return fortunesCookies[idx];
};