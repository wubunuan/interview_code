


// 给你一个整数数组 nums 和一个整数 target 。

// 请你统计并返回 nums 中能满足其最小元素与最大元素的 和 小于或等于 target 的 非空 子序列的数目。

// 由于答案可能很大，请将结果对 109 + 7 取余后返回。

var numSubseq = function (nums, target) {
    const n = nums.length;
    const pow = new Array(n).fill(0);
    pow[0] = 1n;
    let res = 0n;
    const mod = BigInt(1e9 + 7);
    nums.sort((a, b) => a - b);
    for (let i = 1; i < n; ++i) {
        pow[i] = pow[i - 1] * 2n % mod;
    }
    let l = 0;
    let r = n - 1;
    while (l <= r) {
        if (nums[l] + nums[r] <= target) {
            res += pow[r - l];
            res %= mod;
            l++;
        } else {
            r--;
        }
    }
    return res;
};
