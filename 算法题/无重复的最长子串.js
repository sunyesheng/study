var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let maxCount = 0
  let i = 0
  let j = 0
  while (j < s.length) {
    if (set.has(s[j])) {
      while (s[i] !== s[j]) {
        set.delete(s[i])
        i++
      }
      i++
    } else {
      set.add(s[j])
    }
    j++
    maxCount = Math.max(set.size, maxCount)
  }
  return maxCount
}

console.log('first', lengthOfLongestSubstring('abcabcbb'))
