// https://leetcode.com/problems/binary-tree-tilt/
//
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in
// reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
//     You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Given the root of a binary tree, return the sum of every tree node's tilt.
//
// The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. If a node does not have a left child, then the sum of the left subtree node values is treated as 0. The rule is similar if the node does not have a right child.
//
//
//
//   Example 1:
//
//
// Input: root = [1,2,3]
// Output: 1
// Explanation:
//   Tilt of node 2 : |0-0| = 0 (no children)
// Tilt of node 3 : |0-0| = 0 (no children)
// Tilt of node 1 : |2-3| = 1 (left subtree is just left child, so sum is 2; right subtree is just right child, so sum is 3)
// Sum of every tilt : 0 + 0 + 1 = 1
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

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
var findTilt = function(root) {
    var tilt = 0;

    function postOrderTraversal(node) {
        if (!node) return 0;

        const left = postOrderTraversal(node.left);
        const right = postOrderTraversal(node.right);

        tilt += Math.abs(left - right);

        return left + right + node.val;

    }
    postOrderTraversal(root);

    return tilt;
};