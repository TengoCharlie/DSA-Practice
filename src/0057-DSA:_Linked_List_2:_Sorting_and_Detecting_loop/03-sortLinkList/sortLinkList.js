let LNode = require("./../../../utils/linkedListNode");


module.exports = function (A) {
    let result = mergeSort(A);
    return result;
}

function mergeSort(A) {

    // Base case
    if (A == null || A.next == null) return A;
    // Split List
    const mid = findMid(A);
    let B = mid.next;
    mid.next = null;

    let l1 = mergeSort(A);
    let l2 = mergeSort(B);

    return merge2SortedLinkedList(l1, l2);
}

function findMid(A) {
    let slow = A;
    let fast = A;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function merge2SortedLinkedList(l1, l2) {
    let head = new LNode(1);
    let tail = head;

    let h1 = l1;
    let h2 = l2;

    while (h1 != null && h2 !== null) {
        if (h1.data <= h2.data) {
            tail.next = h1;
            tail = h1;
            h1 = h1.next;
        } else {
            tail.next = h2;
            tail = h2;
            h2 = h2.next;
        }
    }

    if (h1 == null) tail.next = h2;
    if (h2 == null) tail.next = h1;

    return head.next;
    
}