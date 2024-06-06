module.exports = function (A, B) {
    const result = solution(A, B);
    return result;
}

function solution(A, B) {

    if (A == B) return A;
    const lA = findLength(A);
    const lB = findLength(B);

    if (lA == lB) {
        return binarySearch(A, B);
    } else if (lA < lB) { 
        const lDiff = lB - lA;
        const bHead = getNewHead(B, lDiff);
        return binarySearch(A, bHead);
    } else {
        const lDiff = lA - lB;
        const aHead = getNewHead(A, lDiff);
        return binarySearch(aHead, B);
    }
}

function getNewHead(head, nextHeadIndex) {
    let temp = head;
    let count = nextHeadIndex
    while (count) {
        temp = temp.next;
        count--;
    }
    return temp;
}
function findLength(A) {
    let size = 0;
    let temp = A;
    while (temp) {
        size++;
        temp = temp.next;
    }
    return size;
}

function binarySearch(A, B){
    let l1 = A;
    let l2 = B;
    let h1 = null;
    let h2 = null;
    let ans = null;

    while (l1 != h1 && l2 != h2) {
        const { m1, m2 } = findMid(l1, l2, h1, h2);
        if (m1 === m2) {
            ans = m1;
            h1 = m1;
            h2 = m2;
        } else {
            l1 = m1.next;
            l2 = m2.next;
        }
    }

    return ans;
}

function findMid(l1, l2, h1 = null, h2 = null) {
    let s1 = l1;
    let f1 = l1;
    let s2 = l2;
    let f2 = l2;

    while ((f1 != h1 && f1.next != h1) || (f2 != h2 && f2.next != h2)) {
        if ((f1 != h1 && f1.next != h1)) {
            s1 = s1.next;
            f1 = f1.next.next;
        }
        if ((f2 != h2 && f2.next != h2)) {
            s2 = s2.next;
            f2 = f2.next.next;
        }
    }

    return {
        m1: s1,
        m2: s2
    }
}


// Not preferred While learning LINKEDLIST
function usingHasSetAlgo(A, B) {
    let listASet = new Set();

    while (A) {
        listASet.add(A);
        A = A.next;
    }

    while (B) {
        if (listASet.has(B)) {
            return B
        }
        listASet.add(B);
        B = B.next;
    }
    return null
}