


var pathWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    let res = [];
    function dfs(i, j, group) {
        if (i >= m || j >= n) {
            if (i === m - 1 && j === n) {
                res = [...group];
            }
            return;
        }
        if (obstacleGrid[i][j] === 0) {
            obstacleGrid[i][j] = -1;
            dfs(i + 1, j, [...group, [i, j]]);
            dfs(i, j + 1, [...group, [i, j]]);
        }
    }
    dfs(0, 0, []);
    return res;
};