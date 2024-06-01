module.exports = function (A, B, C) {
  const head = solution(A, B, C);
  return head;

  // NOTE: More Optimization using SOLID principles
  // const listReverser = new ListReverser();
  // return listReverser.reverseBetween(A, B, C);
};

function solution(A, B, C) {
  let count = 1;
  let temp = A;
  let prev = null;
  while (count < B) {
    prev = temp;
    temp = temp.next;
    count++;
  }
  const { last, next } = reverseLinkedList(temp, B, C);

  // Connect the previous part to the new head of the reversed sublist
  if (B == 1) {
    A.next = next;
    return last;
  }
  prev.next = last;

  // Connect the tail of the reversed sublist to the next part
  temp.next = next;

  return A;
}

function reverseLinkedList(A, B, C) {
  let head = A;
  let temp = head;
  let prev = null;
  let current = temp;
  let count = B;
  while (count <= C) {
    temp = temp.next;
    current.next = prev;
    prev = current;
    current = temp;
    count++;
  }
  head = prev;
  return { last: head, next: current };
}

class ListReverser {
  reverseBetween(head, B, C) {
    if (B === C) return head;

    const { newHead, prev, tail, next } = this._reversePartialList(head, B, C);

    if (prev) prev.next = newHead;
    if (tail) tail.next = next;

    return B === 1 ? newHead : head;
  }

  _reversePartialList(head, B, C) {
    let count = 1;
    let current = head;
    let prev = null;

    while (count < B) {
      prev = current;
      current = current.next;
      count++;
    }

    let tail = current;
    let newHead = null;

    while (count <= C) {
      const next = current.next;
      current.next = newHead;
      newHead = current;
      current = next;
      count++;
    }

    return { newHead, prev, tail, next: current };
  }
}
