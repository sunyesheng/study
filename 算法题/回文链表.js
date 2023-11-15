// https://leetcode.cn/problems/palindrome-linked-list/?envType=study-plan-v2&envId=top-100-liked

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let frontPointer

const recursivelyCheck = (currentNode) => {
  if (currentNode !== null) {
    if (!recursivelyCheck(currentNode.next)) {
      return false
    }
    if (currentNode !== frontPointer) {
      return false
    }
    frontPointer = frontPointer.next
  }
  return true
}

var isPalindrome = function (head) {
  frontPointer = head
  return recursivelyCheck(head)
}

/**
 * Definition for singly-linked list.
 *
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome1 = function (head) {
  const array = []
  let current = head
  while (current !== null) {
    array.push(current.val)
    current = current.next
  }
  for (let i = 0, j = array.length - 1; i <= j; i++, j--) {
    if (array[i] !== array[j]) {
      return false
    }
  }
  return true
}
