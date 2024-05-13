module.exports = function (A){
    return solution(A);
}

function solution(A){
    let N = A.length-1;
    if(N<1) return A[N];
    let lo=1;
    let hi = N-1;

    if(A[0] >= A[1]) return A[0];
    else if(A[N-1] <= A[N]) return A[N];

    while(lo <= hi){
        const mid = Math.floor(lo + (hi-lo)/2);

        if(A[mid] > A[mid-1] && A[mid] > A[mid+1]){
            return A[mid];
        } else if(A[mid-1] < A[mid] && A[mid] < A[mid+1]){
            lo = mid+1;
        } else {
            hi = mid-1
        }
    }
}