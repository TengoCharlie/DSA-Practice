module.exports = function (A, B){
    return solution(A, B);
}

function solution(A, B){
    let l = 1;
    let r = A[A.length-1] - A[0];
    let ans = 0;

    while(l<=r){
        const mid = Math.floor(l + (r-l)/2);
        const possible = aggressiveCows(A, B, mid);
        if(possible){
            ans = mid;
            l = mid+1;
        } else {
            r = mid-1;
        }
    }
    return ans;
}


function aggressiveCows(A, B, mid){
    let count = 1;
    let last_pos = A[0];
    for(let i = 1; i <A.length; i++){
        if(A[i] - last_pos >= mid){
            count++;
            last_pos = A[i];
            if(count === B){
                return true;
            }
        }
    }
    return false;
}