// https://leetcode.cn/problems/intersection-of-two-linked-lists/?envType=study-plan-v2&envId=top-100-liked
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode1 = function (headA, headB) {
  const visited = new Set()
  let temp = headA
  while (temp !== null) {
    visited.add(temp)
    temp = temp.next
  }
  temp = headB
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp
    }
    temp = temp.next
  }
  return null
}

var getIntersectionNode2 = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let pA = headA,
    pB = headB
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
}
