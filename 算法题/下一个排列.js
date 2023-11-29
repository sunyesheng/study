/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // 记录波谷的位置
  let g = -1
  // 记录第一个
  let gmin = -1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      g = i
      break
    }
  }
  if (g !== -1) {
    for (let i = nums.length - 1; i > g; i--) {
      if (nums[i] > nums[g]) {
        gmin = i
        break
      }
    }
    // 交换位置
    [nums[g], nums[gmin]] = [nums[gmin], nums[g]]
    // g位置之后的数字 按照升序排列
    for (let i = g + 1, j = nums.length - 1; i <= j; i++, j--) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }

  } else {
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }
  console.log('first', g, gmin)
};

nums = [1, 3, 2]
nextPermutation(nums)
console.log('res', nums)
