/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let result = 0
  // 定义一个求以该节点为root节点的树的最高度（深度）
  const getTreeDeep = (root) => {
    if (!root) return 0
    const leftDeep = getTreeDeep(root.left)
    const rightDeep = getTreeDeep(root.right)

    result = Math.max(result, leftDeep + rightDeep)

    return Math.max(leftDeep, rightDeep) + 1
  }
  getTreeDeep(root)
  return result
}
