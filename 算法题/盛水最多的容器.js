/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let i = 0
  let j = height.length - 1
  while (i < j) {
    max = Math.max(Math.min(height[i], height[j]) * (j - i), max)
    if (height[i] < height[j]) {
      i = i + 1
    } else {
      j = j - 1
    }
  }
  return max
};