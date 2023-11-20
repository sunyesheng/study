/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const hash = {}
  let maxCount = 0
  for (let num of nums) {
    hash[num] = 1
  }
  for (let num of nums) {
    if (!hash[num - 1]) {
      let i = 1
      while (hash[num + i]) {
        i++
      }
      maxCount = Math.max(i, maxCount)
    }
  }

  return maxCount
}
