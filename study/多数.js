var majorityElement1 = function (nums) {
  const hash = {}
  let result
  nums.forEach((num) => {
    if (hash[num]) {
      hash[num] = hash[num] + 1
    } else {
      hash[num] = 1
    }
    if (hash[num] >= nums.length / 2) {
      result = num
    }
  })
  return result
}

var majorityElement2 = function (nums) {
  let major = NaN
  let tick = 0
  nums.forEach((num) => {
    if (Number.isNaN(major)) {
      major = num
      tick = 1
    } else {
      if (num === major) {
        tick = tick + 1
      } else {
        tick = tick - 1
        if (tick === 0) {
          major = NaN
        }
      }
    }
  })
  return major
}

var majorityElement3 = function (nums) {
  const getMode = (low, high) => {
    if (low === high) return nums[low]
    let mid = Math.floor((low + high) / 2)

    const left = getMode(low, mid)
    const right = getMode(mid + 1, high)

    if (left === right) return left

    let leftCount = getCount(left, low, high)
    let rightCount = getCount(right, low, high)

    return leftCount > rightCount ? left : right
  }
  const getCount = (num, low, high) => {
    let count = 0
    for (let i = low; i <= high; i++) {
      if (nums[i] === num) count++
    }
    return count
  }
  return getMode(0, nums.length - 1)
}

const nums = [2, 2, 1, 1, 1, 2, 2]

console.log('result 1', majorityElement1(nums))
console.log('result 2', majorityElement2(nums))
console.log('result 3', majorityElement3(nums))
