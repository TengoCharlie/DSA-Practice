module.exports = function (A){
    return optimise(A);
}

function optimise(A) { 
    if(A <= 1) return A;

    let l = 1;
    let h = A-1;
    let ans = 0;

    while(l<=h){
        const mid = Math.floor(l + (h - l)/2);
        const sqre = mid*mid;
        if(sqre== A) return mid;
        else if(sqre < A) {
            ans = mid;
            l = mid+1;
        } else h = mid-1;
    }
    return ans;
}
