/**
 * 二分查找(双闭区间)
*/
function binarySearch(nums, target) {

    let i = 0,
        j = nums.length - 1;

    while (i <= j) {
        const m = parseInt(i + (j - i) / 2);// parseInt((i + j) / 2); i+j 可能会超过int的最大值
        if (nums[m] < target) {
            i = m + 1;
        } else if (nums[m] > target) {
            j = m - 1;
        } else {
            return m;
        }
    }
    return -1;//未找到值
}


/**左闭右开*/
function binarySearch2(nums, target) {
    let i = 0,
        j = nums.length;

    while (i < j) {
        const m = parseInt(i + (j - i) / 2);
        if (nums[m] < target) {
            i = m + 1;
        } else if (nums[m] > target) {
            j = m;
        } else {
            return m;
        }
    }
    return -1;
}