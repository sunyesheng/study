/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate1 = function (numRows) {
  if (numRows === 0) {
    return []
  }
  if (numRows === 1) {
    return [[1]]
  }
  if (numRows === 2) {
    return [[1], [1, 1]]
  }
  const res = []
  for (let i = 1; i <= numRows; i++) {
    if (i == 1 || i == numRows) {
      res.push(1)
    } else {
      res.push(
        generate1(numRows - 1).pop()[i - 2] +
          generate1(numRows - 1).pop()[i - 1]
      )
    }
  }
  return [...generate1(numRows - 1), res]
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate2 = function (numRows) {}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate3 = function (numRows) {}

console.log(generate1(11))
console.log(generate2(5))
console.log(generate3(5))
