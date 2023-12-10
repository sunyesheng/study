/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const max = nums.reduce((a, b) => a * b, 1)
  const a = []
  for (let i of nums) {
    a.push(max / i)
  }
  return a
};

console.log('first', productExceptSelf([-1, 1, 0, -3, 3]))