
// 「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。

// HTML 里这些特殊字符和它们对应的字符实体包括：

// 双引号：字符实体为 &quot; ，对应的字符是 " 。
// 单引号：字符实体为 &apos; ，对应的字符是 ' 。
// 与符号：字符实体为 &amp; ，对应对的字符是 & 。
// 大于号：字符实体为 &gt; ，对应的字符是 > 。
// 小于号：字符实体为 &lt; ，对应的字符是 < 。
// 斜线号：字符实体为 &frasl; ，对应的字符是 / 。
// 给你输入字符串 text ，请你实现一个 HTML 实体解析器，返回解析器解析后的结果。


var entityParser = function (text) {
    const map = {
        '&quot;': '"',
        '&apos;': "'",
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&frasl;': '/',
    }
    const n = text.length;
    let i = 0;
    let res = "";
    while (i < n) {
        let endIdx = text.indexOf(';', i);
        let cur = text.slice(i, endIdx + 1);
        if (text[i] === '&' && map[cur]) {
            res += map[cur];
            i = endIdx + 1;
        } else {
            res += text[i];
            i++;
        }
    }
    return res;
};