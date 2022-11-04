// 状态:
// dp[i][j] 有i个鸡蛋，j次扔鸡蛋的测得的最多楼层

// 二分法从中间楼层掉个鸡蛋，次数+1
// 碎了-> i-1个鸡蛋测试j-1次 -> 下面的楼层
// 没碎-> i个鸡蛋测试j-1次 -> 上面的楼层
// 所以 dp[i][j] = 1 + dp[i-1][j-1] + dp[i][j-1]

// 然后只要判断dp[i][j]大于楼层N的话，就可以返回次数j了。

var superEggDrop = function (k, n) {
    const dp = new Array(k + 1).fill(0).map(i => new Array(n + 1).fill(0));
    for (let j = 1; j <= n; ++j) {
        for (let i = 1; i <= k; ++i) {
            dp[i][j] = 1 + dp[i][j - 1] + dp[i - 1][j - 1];
            if (dp[i][j] >= n) {
                return j;
            }
        }
    }
    return n;
};