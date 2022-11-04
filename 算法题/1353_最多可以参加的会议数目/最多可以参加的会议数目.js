


var maxEvents = function (events) {
    events.sort((a, b) => a[1] - b[1]);
    const had = [];
    let count = 0;
    const n = events.length;
    let flag = true;
    for (let i = 1; i < n; ++i) {
        if (events[i][1] === events[i - 1][1]) {
            flag = false;
            break;
        }
    }
    if (flag) return n;
    for (let i = 0; i < n; ++i) {
        const [sta, end] = events[i];
        for (let j = sta; j <= end; ++j) {
            if (had[j] === undefined) {
                had[j] = 1;
                count++;
                break;
            }
        }
    }
    return count;
};