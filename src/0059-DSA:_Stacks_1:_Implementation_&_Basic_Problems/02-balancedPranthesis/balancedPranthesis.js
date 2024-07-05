module.exports = function (A) {
  return solution(A);
};

function solution(A) {
  let stk = new Stack();
  const openB = ["[", "{", "("];
  const closedB = ["]", "}", ")"];
  for (let i = 0; i < A.length; i++) {
    if (openB.includes(A[i])) {
      stk.push(A[i]);
    } else {
      if (stk.isEmpty()) return 0;

      const counterB = openB[closedB.indexOf(A[i])];
      if (stk.top() != counterB) {
        return 0;
      } else {
        stk.pop();
      }
    }
  }

  if (stk.isEmpty()) return 1;
  else return 0;
}

class NNode {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    let node = new NNode(value);
    node.next = this.head;
    this.head = node;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty, cannot pop");
    }
    this.head = this.head.next;
  }

  top() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty, cannot pop");
    }
    return this.head.value;
  }
  isEmpty() {
    return !this.head;
  }
}
