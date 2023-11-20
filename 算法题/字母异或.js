/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams1 = function (strs) {
  const hash = {}
  for (let str of strs) {
    let map = Array.from(str).sort().join('')
    hash[map] = hash[map] ? [...hash[map], str] : [str]
  }
  return Object.values(hash)
}
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams2 = function (strs) {
  const hash = {}
  for (let str of strs) {
    let key = new Array(26).fill(0)
    for (let s of str) {
      key[s.charCodeAt() - 'a'.charCodeAt()]++
    }
    hash[key] = hash[key] ? [...hash[key], str] : [str]
  }
  return Object.values(hash)
}
