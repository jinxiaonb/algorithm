// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var arr = [];
    var len = nums.length;
    for (let i = 0; i < len; i++) {
        var one = nums[i];
        var temp = i + 1;
        for (let j = temp; j < len; j++) {
            var two = nums[j];
            var result = one + two;
            if (result == target) {
                arr = [i, j];
                break;
            }
        }
    }
    return arr;
};

var twoSumSecond = function (nums, target) {
    let mapObj = {};
    let res = [];
    nums.forEach((e, i) => mapObj[e] = i);
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let j = mapObj[target - nums[i]];
        if (j && j !== i) {
            res = [i, j];
            break;
        }
    }
    return res;
}


//console.log(twoSum([2,711,15], 9));
console.log(twoSumSecond([2, 711, 15], 9));