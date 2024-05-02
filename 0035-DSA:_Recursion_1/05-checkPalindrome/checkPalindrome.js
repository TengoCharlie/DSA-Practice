//param A : string
//return an integer
module.exports = function (A) {
    return bruteForce(A);
}

function bruteForce(A) {
    A = A.split(' ').join('');
    // BF
    let loopCount = 0;
    const length = A.length;

    if(length % 2 == 0) loopCount = length/2;
    else loopCount = (length-1)/2
    for (let i = 0, j = length-1; i < loopCount, j >= loopCount; i++, j--) {
            if(A[i] != A[j]) return 0;
    }
    return 1;
}

