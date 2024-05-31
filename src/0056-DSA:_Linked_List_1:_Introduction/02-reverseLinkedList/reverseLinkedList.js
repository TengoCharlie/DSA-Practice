module.exports = function (A) {
    return solution(A);
};


function solution(A) {
    let head = A;
    let temp = head;
    let prev = null;
    let current = temp;
    while (temp != null) {
        temp = temp.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    head = prev;
    return head;
}