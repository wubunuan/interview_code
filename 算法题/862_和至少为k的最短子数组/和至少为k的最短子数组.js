


var shortestSubarray = function (nums, k) {
    let res = Infinity;
    const n = nums.length;
    let sum = 0;
    let l = 0;
    for (let i = 0; i < n; ++i) {
        sum += nums[i];
        if (sum <= 0) {
            l = i + 1;
            sum = 0;
        } else if (sum >= k) {
            while (sum >= k) {
                res = Math.min(res, i - l + 1);
                sum -= nums[l];
                l++;
            }
        } else {
            let r = i;
            while (r > l && nums[r] < 0) {
                nums[r - 1] += nums[r];
                nums[r] = 0;
                r--;
            }
        }
    }
    return res === Infinity ? -1 : res;
};