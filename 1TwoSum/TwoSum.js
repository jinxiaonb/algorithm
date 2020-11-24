// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * 双层循环
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

/**
 * 使用对象索引
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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


/**
 * 使用map 速度最快
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumThird = (nums, target) => {
    let map = new Map();
    // nums.forEach((e, i) => map.set(e, i)); 不要先赋值，赋值的话就全部都要循环一遍
    // console.log(map);
    // let len = nums.length;
    for (let i = 0; i < nums.length; i++) {
        let k = target - nums[i];
        // console.log(map.has(k));
        if (map.has(k)) {
            return [i, map.get(k)];
        }
        map.set(nums[i], i);
    }
    return [];
}


//console.log(twoSum([2,7,11,15], 9));
// console.log(twoSumSecond([2, 7, 11, 15], 9));
console.log(twoSumThird([2, 8, 7, 11, 15], 9));