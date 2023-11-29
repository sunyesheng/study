// https://leetcode.cn/problems/sort-colors/solutions/2029634/by-krone1-vfmf/?envType=study-plan-v2&envId=top-100-liked
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0
  let right = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]]
      left = left + 1
    }
    if (nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]]
      right = right - 1
    }
  }
  
}
