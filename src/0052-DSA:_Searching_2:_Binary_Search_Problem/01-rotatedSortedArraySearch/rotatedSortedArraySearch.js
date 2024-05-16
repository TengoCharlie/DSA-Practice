module.exports = function (A, B) {
    return optimise(A, B);
}

function optimise(A, B) {
    let l = 0;
    let r = A.length - 1;

    if(A[l] == B) return l;
    if(A[r] == B) return r;

    while (l <= r) {
        const mid = Math.floor(l+(r-l)/2);

        if(A[mid] == B) return mid;

        // If target is in P1
        if(A[0] < B) [l, r] = targetInP1(A, B, l, mid, r);
        // If target is in P2
        else [l, r] = targetInP2(A, B, l, mid, r);
    }

    return -1;
}


function targetInP1(A, B, l, mid, r) { 
    // Mid in P1
    if(A[mid] >= A[0]){
        if(A[mid] < B) l = mid + 1;
        else r = mid - 1;
    } else {  //Mid in P2
        // Moving towards B towards P1
        r = mid-1;
    }
    return [l, r];
}

function targetInP2(A, B, l, mid, r) { 
        // Mid in P1
        if(A[mid] >= A[0]){
            // Moving towards B towards P2
            l = mid+1;
        } else {  //Mid in P2 
            if(A[mid] > B) r = mid - 1;
            else l = mid + 1;
        }
    return [l, r];
}