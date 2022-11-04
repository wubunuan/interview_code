

// 给你一个由数字和运算符组成的字符串 expression ，按不同优先级组合数字和运算符，计算并返回所有可能组合的结果。


var diffWaysToCompute = function (expression) {
    let map = new Map();
    function dfs(expression) {
        let res = [];
        if (map.has(expression)) return map.get(expression);
        for (let i = 0; i < expression.length; ++i) {
            let c = expression.charAt(i);
            if (['-', '+', '*'].includes(c)) {
                let left = dfs(expression.slice(0, i));
                let right = dfs(expression.slice(i + 1));
                for (let l of left) {
                    for (let r of right) {
                        switch (c) {
                            case '+':
                                res.push(l + r); break;
                            case '-':
                                res.push(l - r); break;
                            case '*':
                                res.push(l * r); break;
                        }
                    }
                }
            }
        }
        if (!res.length) {
            res.push(Number(expression));
        }
        map.set(expression, res);
        return res;
    }
    return dfs(expression);
};