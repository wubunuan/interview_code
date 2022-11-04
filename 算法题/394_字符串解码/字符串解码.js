// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。


var decodeString = function (s) {
    const numStack = [];
    const strStack = [];
    let res = '';
    let num = 0;
    for (let char of s) {
        if (char > 0 || char < 9) {
            num = num * 10 + Number(char);
        } else if (char === '[') {
            numStack.push(num);
            strStack.push(res);
            num = 0;
            res = '';
        } else if (char === ']') {
            res = strStack.pop() + res.repeat(numStack.pop());
        } else {
            res += char;
        }
    }
    return res;
};