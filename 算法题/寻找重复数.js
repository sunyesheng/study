/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0
  let fast = 0
  while (true) {
    if (nums[slow] === nums[slow][fast]) {
      return nums[slow]
    } else {
      slow = slow + 1
      fast = fast + 2
    }
  }

};

const a = [1, 3, 4, 2, 2]

findDuplicate(a)