function num2cn(n) {
    let flag = false;
    if (n < 0) flag = true;
    n = n.toString();
    let len = n.length;
    const table = {
        0: '零',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
    }
    if (len === 1) return table[n];
    let res = '';
    const unit = ['', '十', '百', '千'];
    for (let i = 0; i < n.length; ++i, len--) {
        if (len / 4 === 2) res += '亿';
        if (len / 4 === 1) res += res[res.length - 1] === '亿' ? '' : '万';
        if (n[i] != 0) {
            if (n[i - 1] == 0) res += '零';
            let mark = unit[(len - 1) % 4];
            res += table[n[i]] + mark;
        }
    }
    if (len % 4 === 2 && n[0] === '1') res = res.slice(1);
    return flag ? '负' + res : res;
}