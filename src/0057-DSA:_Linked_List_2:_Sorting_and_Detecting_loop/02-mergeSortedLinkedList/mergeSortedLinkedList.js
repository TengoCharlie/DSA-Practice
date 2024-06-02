const linkedListNode = require("../../../utils/linkedListNode");

module.exports = function (A, B) {
  return solution(A, B);
};

function solution(A, B) {
  if (A == null) return B;
  if (B == null) return A;

  let head = new linkedListNode(-1);
  let h1 = A;
  let h2 = B;
  // Same Logic But with extra line of code
  //   let head = h1;
  //   let h1 = h1.next;
  //   if (A.data > B.data) {
  //     h1 = head;
  //     head = B;
  //     h2 = head.next;
  //   }
  let tail = head;

  while (h1 != null && h2 != null) {
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

  if (h1 == null) {
    tail.next = h2;
  }

  if (h2 == null) {
    tail.next = h1;
  }
  return head.next;
}
