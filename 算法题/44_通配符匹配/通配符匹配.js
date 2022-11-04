


var isMatch = function (s, p) {
    const m = s.length;
    const n = p.length;
    const dp = new Array(m + 1).fill(0).map(i => new Array(n + 1).fill(false));
    dp[0][0] = true;
    for (let i = 1; i <= n; ++i) {
        if (dp[0][i - 1] && p[i - 1] === '*') {
            dp[0][i] = true;
        }
    }
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            }
        }
    }
    return dp[m][n];
};