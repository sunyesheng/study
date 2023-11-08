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
var generate2 = function (numRows) {
  const res = []
  let i = 1
  while (i <= numRows) {
    if (i == 1) {
      res.push([1])
    } else {
      const l = []
      for (let j = 1; j < i - 1; j++) {
        l.push(res[i - 2][j - 1] + res[i - 2][j])
      }
      const r = [1, ...l, 1]
      res.push(r)
    }
    i = i + 1
  }
  return res
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate3 = function (numRows) {}

console.log(generate1(2))
console.log(generate2(5))
console.log(generate3(5))
