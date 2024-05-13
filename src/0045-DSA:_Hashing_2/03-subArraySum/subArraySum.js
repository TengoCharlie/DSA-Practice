module.exports = function (A, B) {
    return bruteForce(A, B);
}

function bruteForce(A, B) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += A[k];
            }
            if (sum == B) count++;
        }
    }
    return count;
}

// TODO