const listToArray = require("./../../../utils/linkedListToArray");

module.exports = function (A, B) {
    const result = solution(A, B);
    return result;
}

function solution(A, B){
    let l1 = A;
    let l2 = B;
    let h1 = null;
    let h2 = null;
    let ans = null;

    while (l1 != h1 && l2 != h2) {
        const { m1, m2 } = findMid(l1, l2, h1, h2);
        if (m1.next === m2.next) {
            ans = m1.next;
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