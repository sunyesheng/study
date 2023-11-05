// 递归法
var climbStairs1 = function (n) {
  if (n <= 2) {
    return n
  } else {
    return climbStairs1(n - 1) + climbStairs1(n - 2)
  }
}
// 迭代法
var climbStairs2 = function (n) {
  const dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp.push(dp[1] + dp[2])
    dp.shift()
  }
  return n <= 2 ? dp[n] : dp[2]
}
