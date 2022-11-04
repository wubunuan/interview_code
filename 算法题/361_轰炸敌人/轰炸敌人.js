

var maxKilledEnemies = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let max = 0;
    const dp = new Array(m).fill(0).map(i => new Array(n).fill(0));
    for (let i = 0; i < m; ++i) {
        let pre = 0;
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 'E') pre++;
            else if (grid[i][j] === 'W') pre = 0;
            else dp[i][j] += pre;
        }
        pre = 0;
        for (let j = n - 1; j >= 0; --j) {
            if (grid[i][j] === 'E') pre++;
            else if (grid[i][j] === 'W') pre = 0;
            else dp[i][j] += pre;
        }
    }
    for (let j = 0; j < n; ++j) {
        let pre = 0;
        for (let i = 0; i < m; ++i) {
            if (grid[i][j] === 'E') pre++;
            else if (grid[i][j] === 'W') pre = 0;
            else dp[i][j] += pre;
        }
        pre = 0;
        for (let i = m - 1; i >= 0; --i) {
            if (grid[i][j] === 'E') pre++;
            else if (grid[i][j] === 'W') pre = 0;
            else dp[i][j] += pre;
        }
    }
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === '0') {
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max;
};