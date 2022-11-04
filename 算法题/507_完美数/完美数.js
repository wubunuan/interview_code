

// 对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。

// 给定一个 整数 n， 如果是完美数，返回 true；否则返回 false。


var checkPerfectNumber = function (num) {
    if (num === 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= num; ++i) {
        if (num % i === 0) {
            sum += i;
            if (i * i < num) {
                sum += num / i;
            }
        }
    }
    return sum === num;
};

