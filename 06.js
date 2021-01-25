/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  var stack = [],
    result = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  for (let i = stack.length - 1; i > 0; i--) {
    result.push(stack[i]);
  }
  return result;
};

// 栈先进后出
// 倒序构造数组并输出 空间O2n了