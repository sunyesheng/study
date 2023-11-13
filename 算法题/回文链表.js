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
