/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

  // dp[i] = max(dp[i-1], dp[i-2] + nums[i])

  if (nums.length === 0) {
    return 0
  }

  let dp = new Array()
  dp[0] = 0
  dp[1] = nums[0]
  for (let i = 2; i < nums.length + 1; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }

  return dp[nums.length]

};