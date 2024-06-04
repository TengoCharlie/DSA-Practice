module.exports = function (A) {
    return solution(A);
}

function solution(A) {
    let slow = A;
    let fast = A;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            fast = A;
            while (slow.next != fast.next) {
                slow = slow.next;
                fast = fast.next;
            }
            slow.next = null;
            return A;
        }
    }
    return A;
}