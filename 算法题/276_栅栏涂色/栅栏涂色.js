/*
    有 k 种颜色的涂料和一个包含 n 个栅栏柱的栅栏，请你按下述规则为栅栏设计涂色方案：
    每个栅栏柱可以用其中 一种 颜色进行上色。
    相邻的栅栏柱 最多连续两个 颜色相同。
    给你两个整数 k 和 n ，返回所有有效的涂色 方案数 。
*/

function fun(n, k){
    if(k === 1) return n > 2 ? 0 : 1;
    const dp = new Array(n).fill(0).map(i => new Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = k;
    for(let i = 1; i < n; ++i){
        dp[i][0] = dp[i - 1][1];
        dp[i][1] = (dp[i - 1][0] + dp[i - 1][1]) * (k - 1);
    }
    return dp[n - 1][0] + dp[n - 1][1];
}
console.log(fun(3, 2));