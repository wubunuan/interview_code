


var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;
    let y = x;
    let res = 0;
    while (y) {
        res = res * 10 + y % 10;
        y = ~~(y / 10);
    }
    return res === x;
};