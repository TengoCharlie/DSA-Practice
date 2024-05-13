module.exports = function (A, B){
    return solution(A, B);
}

function solution(A, B){
    let lo = 1;
    let hi = A.length-2
    let ans = -1;

    if(A[0] >= B) return 0;
    if(A[A.length-1] == B) return (A.length-1);
    if(A[A.length-1] < B) return A.length;

    while(lo<=hi){
        const mid = Math.floor(lo + (hi-lo)/2);
        if(A[mid] == B){
            return mid;
        } else if(A[mid] > B){
            hi = mid-1;
            ans = mid;
        } else {
            lo = mid+1;
        }
    }

    return ans;
}
