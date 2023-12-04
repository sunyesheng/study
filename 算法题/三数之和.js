/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []
  const sortNums = nums.sort((a, b) => a - b)

  for (let i = 0; i < sortNums.length; i++) {
    if (i > 0 && sortNums[i] === sortNums[i - 1]) continue
    let j = i + 1
    let k = sortNums.length - 1
    let target = 0 - sortNums[i]
    while (j < k) {
      if (sortNums[j] + sortNums[k] === target) {
        result.push([sortNums[i], sortNums[j], sortNums[k]])
        while (j < k && sortNums[j] === sortNums[j + 1]) j++;
        while (j < k && sortNums[k] === sortNums[k - 1]) k--;
        j++;
        k--;
      } else if (sortNums[j] + sortNums[k] > target) {
        k--
      } else {
        j++
      }

    }
  }
  return result
};
const nums = [-1, 0, 1, 2, -1, -4]
console.log('first', threeSum(nums)) 