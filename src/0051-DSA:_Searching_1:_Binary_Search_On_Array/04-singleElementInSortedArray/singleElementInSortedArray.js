module.exports = function (A){
    return solution(A);
}

function solution(A){
    let lo = 1;
    let hi = A.length-2;

    // Base Cases
    if(A[0] !== A[1]) return A[0];
    if(A[A.length-1] !== A[A.length-2]) return A[A.length-1];

    while(lo<=hi){
        const mid = Math.floor(lo + (hi-lo)/2);

        if(A[mid] != A[mid-1] && A[mid] != A[mid+1]){
            return A[mid];
        } else if(
            mid % 2 == 1 && A[mid] == A[mid+1] ||
            mid % 2 == 0 && A[mid-1] == A[mid]
        ) {
            hi = mid-1
        } else {
            lo = mid +1
        }
    }

    return -1;
}


// Observation 
//  All the values right side of the unique value having first instance at odd index and all the values left side of the unique value having first element at even index.