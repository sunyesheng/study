/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const arr = intervals.sort((a, b) => a[0] - b[0])
  const result = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] > result[result.length - 1][1]) {
      result.push(arr[i])
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        arr[i][1]
      )
    }
  }
  return result
}
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
console.log('first', merge(intervals))
