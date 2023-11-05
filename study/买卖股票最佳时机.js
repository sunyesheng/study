/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!Array.isArray(prices) || prices.length <= 0) {
    return 0
  } else {
    let min = prices[0]
    let max = 0
    prices.forEach((p) => {
      min = Math.min(p, min)
      max = Math.max(max, p - min)
    })
    return max
  }
}

const prices = [7, 1, 5, 3, 6, 4]

console.log('first', maxProfit(prices))
