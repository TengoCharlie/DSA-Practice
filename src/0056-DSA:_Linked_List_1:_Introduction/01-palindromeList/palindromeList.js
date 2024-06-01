module.exports = function (A) {
    return bruteForce(A);
}

function bruteForce(head) {
    // let size = getSize(head);
    // const midIndex = size % 2 ? (size + 1) / 2 : size / 2;
    // let midHead = getMidHead(head, midIndex+1);
    let midHead = getMidHead(head);
    const midReverse = reverseLinkedList(midHead);
    const result = isPalindrome(head, midReverse);
    return result;
}

function isPalindrome(head, leg) {
    while (leg != null) {
        if (head.data != leg.data) return 0;
        head = head.next;
        leg = leg.next;
    }
    return 1;
}

// function getSize(head) {
//     let temp = head;
//     let count = 0;
//     while (temp != null) {
//         temp = temp.next;
//         count++;
//     }
//     return count;
// }

// function getMidHead(head, midIndex) {
//     let count = 1;
//     let temp = head;
//     while (count < midIndex) {
//         temp = temp.next;
//         count++;
//     }
//     return temp;
// }

function getMidHead(head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.next;
}

function reverseLinkedList(head) {
    let temp = head;
    let prev = null;
    let current = temp;
    while (temp != null) {
        temp = temp.next;
        current.next = prev;
        prev = current;
        current = temp
    }
    return prev;
}
