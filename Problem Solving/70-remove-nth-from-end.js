/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let root = head;
    let size = 1;
   while (root.next) {
       size++;
       root = root.next;
   }
   console.log(size);
   root = head;
   // remove size - n element
   for (let i = 1; i <= size; i++) {
       if (i === (size - n)) {
           root.next = root.next.next;
       } else {
       root = root.next;
       }
   }
   return head;
};
