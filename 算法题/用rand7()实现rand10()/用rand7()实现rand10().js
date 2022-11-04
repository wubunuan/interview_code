// 给定方法 rand7 可生成 [1,7] 范围内的均匀随机整数，试写一个方法 rand10 生成 [1,10] 范围内的均匀随机整数。

// 你只能调用 rand7() 且不能调用其他方法。请不要使用系统的 Math.random() 方法。

// 每个测试用例将有一个内部参数 n，即你实现的函数 rand10() 在测试时将被调用的次数。请注意，这不是传递给 rand10() 的参数。



// (randX() - 1)*Y + randY() 可以等概率的生成[1, X * Y]范围的随机数
var rand10 = function() {
    let res = 0;
    do {
        let a = rand7();
        let b = rand7();
        res = (a - 1) * 7 + b  //生成1-49的随机数
    } while(res > 10);  //只取1-10
    return res;  //返回1-10

};