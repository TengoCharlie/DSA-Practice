const LNode = require("./linkedListNode")

module.exports = function (arr) {
    if (arr.length === 0) return null;
    let head = new LNode(arr[0]);
    let temp = head;
    for (let i = 1; i < arr.length; i++) {
        temp.next = new LNode(arr[i]);
        temp = temp.next;
    }
    return head;
}