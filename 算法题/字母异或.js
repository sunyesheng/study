/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hash = {}
  for (let str of strs) {
    let map = Array.from(str).sort().join('')
    hash[map] = hash[map] ? [...hash[map], str] : [str]
  }
  return Object.values(hash)
}
