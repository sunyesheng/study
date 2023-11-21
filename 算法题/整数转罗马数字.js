var intToRoman = function (num) {
  const valueSymbols = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]
  const result = []
  let n = num
  for (let [key, sym] of valueSymbols) {
    while (n >= key) {
      n = n - key
      result.push(sym)
    }
    if (n === 0) {
      break
    }
  }
  return result.join('')
}
console.log('first', intToRoman(58))
