

//没有括号

var calculate = function (s) {
    const n = s.length;
    let num = 0;
    let sign = "+";
    const stack = [];
    for (let i = 0; i <= n; ++i) {
        let char = s[i];
        if (char === ' ') continue;
        if (char > 0 || char < 9) {
            num = num * 10 + Number(char);
            continue;
        }
        switch (sign) {
            case '+':
                stack.push(num); break;
            case '-':
                stack.push(-num); break;
            case '*':
                stack.push(stack.pop() * num); break;
            case '/':
                stack.push(~~(stack.pop() / num)); break;
        }
        num = 0;
        sign = char;
    }
    return stack.reduce((a, b) => a + b);
};