

var countAndSay = function (n) {
    if (n === 1) return '1';
    let res = '1';
    for (let i = 2; i <= n; ++i) {
        let arr = [];
        for (let j = 0; j < res.length; ++j) {
            if (arr[arr.length - 1] === res[j]) {
                arr[arr.length - 2] += 1;
            } else {
                arr.push(1, res[j]);
            }
        }
        res = arr.join('');
    }
    return res;
};