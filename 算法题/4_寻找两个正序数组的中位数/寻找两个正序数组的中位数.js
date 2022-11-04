

var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    let left = Math.floor((m + n - 1) / 2) + 1;
    let right = Math.ceil((m + n - 1) / 2) + 1;
    return (getKth(nums1, nums2, left) + getKth(nums1, nums2, right)) / 2;
};

//求两个有序数组中的第k小的数 
function getKth(nums1, nums2, k) {
    const m = nums1.length;
    const n = nums2.length;
    if (m === 0) return nums2[k - 1];
    if (n === 0) return nums1[k - 1];
    if (k === 1) return Math.min(nums1[0], nums2[0]);
    const i = Math.min(Math.floor(k / 2), m) - 1;
    const j = Math.min(Math.floor(k / 2), n) - 1;
    if (nums1[i] < nums2[j]) {
        nums1 = nums1.slice(i + 1);
        return getKth(nums1, nums2, k - i - 1);
    } else {
        nums2 = nums2.slice(j + 1);
        return getKth(nums1, nums2, k - j - 1);
    }
}