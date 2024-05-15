module.exports = function (A, B) {
    return optimise(A, B);
}

function optimise(A, B) {
    let row = A.length;
    let col = A[0].length;


    if(A[0][0] == B || A[row-1][col-1] == B) return 1;

    let lo = 1;
    let hi = row*col-2;

    while(lo <= hi){
        mid = Math.floor(lo + (hi-lo)/2);
         if(A[parseInt(mid/col)][parseInt(mid%col)] == B){
            return 1;
        } else if(A[parseInt(mid/col)][parseInt(mid%col)] > B){
            hi = mid-1;
        } else {
            lo = mid+1;
        }
    }
    return 0;
}
