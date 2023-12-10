/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = [0]
  for (let i = 1; i <= n; i++) {
    dp[i] = i
    for (let k = 0; i - k * k >= 0; k++) {
      dp[i] = Math.min(dp[i], dp[i - k * k] + 1)
    }
  }
  return dp[n]
};