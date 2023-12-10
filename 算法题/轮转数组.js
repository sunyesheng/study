/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length
  nums.splice(0, 0, ...nums.splice(-k))
};

console.log('first', rotate([1, 2, 3, 4, 5, 6, 7], 3))