// 给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n 位上的数字。

var findNthDigit = function (n) {
    let d = 1, count = 9;
    // 找到所在位数
    while (n > d * count) {
        n -= d * count;
        d++;
        count *= 10;
    }
    // 得到所在位数中数组的下标
    const index = n - 1;
    // 得到所在位数中的起始数字
    const start = Math.pow(10, d - 1);
    // 得到包含目标值的数字
    const num = start + Math.floor(index / d);
    // 根据偏移量返回目标值
    return Number((num + '')[index % d])
};