/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = nums[0]
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) {
    pre = pre <= 0 ? nums[i] : nums[i] + pre
    result = Math.max(pre, result)
  }
  return result
}

// 动态规划 写状态转移方程
