

//有括号

var calculate = function (s) {
    let res = 0;
    let multi = 1;
    let stack = [1];
    let i = 0;
    let n = s.length;
    while (i < n) {
        if (s[i] === '+') {
            multi = stack[stack.length - 1];
        } else if (s[i] === '-') {
            multi = -stack[stack.length - 1];
        } else if (s[i] === '(') {
            stack.push(multi);
        } else if (s[i] === ')') {
            stack.pop();
        } else if (s[i] === ' ') {

        } else {
            let num = '';
            while (i < n && /[0-9]/.test(s[i])) {
                num += s[i];
                i++;
            }
            i--;
            res += (+num) * multi;
        }
        i++;
    }
    return res;
};