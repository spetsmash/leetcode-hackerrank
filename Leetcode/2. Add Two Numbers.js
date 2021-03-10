// https://leetcode.com/problems/add-two-numbers/
//
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in
// reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
//     You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

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

var addTwoNumbers = function(l1, l2) {
    var sum1 = '';
    var sum2 = '';

    var cur1 = l1;
    var cur2 = l2;


    while (cur1) {
        sum1 += cur1.val;
        cur1 = cur1.next;
    }

    while (cur2) {
        sum2 += cur2.val;
        cur2 = cur2.next;
    }
    sum1 = sum1.split('').reverse().join('');
    sum2 = sum2.split('').reverse().join('');
    // console.log(BigInt(sum1))
    var arr = [];
    arr = (BigInt(sum1) + BigInt(sum2)).toString().split('').reverse();
    console.log(BigInt(sum1) + BigInt(sum2))



    var newNodeList = new ListNode(arr[0]);
    var head = newNodeList
    var i = 1;
    while(i < arr.length) {
        head.next = new ListNode(arr[i]);
        var temp = head.next;
        head = temp;
        i++;
    }
    return newNodeList;
};
