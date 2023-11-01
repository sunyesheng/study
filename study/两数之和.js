// https://www.yuque.com/sunyesheng/xagodq/fd9h86rr9h2266gk/edit?toc_node_uuid=gg682gd1HrwdVRpS

const sumToNumber = (nums, target) => {
  if (!Array.isArray(nums)) {
    throw new Error('xxx: xxx1')
  }

  if (nums.length === 0) {
    throw new Error('xxx: xxx2')
  } else {
    const hash = {}
    let res = []
    nums.forEach((element, index) => {
      if (hash[target - element]) {
        res = [hash[target - element], index]
      } else {
        hash[element] = index
      }
    })
    return res
  }
}

const nums = [3, 2, 4]
const target = 6

console.log('first', sumToNumber(nums, target))
