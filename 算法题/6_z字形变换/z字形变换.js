

var convert = function (s, numRows) {
    if (numRows === 1) return s;
    const len = s.length;
    const n = Math.min(len, numRows);
    const rows = new Array(n).fill('');
    let i = 0;
    let dir = true;
    for (let c of s) {
        rows[i] += c;
        i += dir ? 1 : -1;
        if (i === 0 || i === n - 1) {
            dir = !dir;
        }
    }
    let res = '';
    for (let row of rows) {
        res += row;
    }
    return res;
};