module.exports = function (A, B, C) {
    return optimisation(A, B, C) % 10000003;
}

function optimisation(A, B, C){
    let l = Math.max(...C) * B;
    let r = B * (C.reduce(((prev, curr) => prev+curr), 0));
    let ans = 0;
    while(l<=r){
        let mid = Math.floor(l+(r-l)/2);
        const possible = isPossible(C, B, mid, A);

        if(possible) {
            ans = mid;
            r = mid-1;
        } else {
            l = mid+1;
        }
    }
    return ans;
}


function isPossible(arr, timePerUnit, totalTimePerPainter, painter) {
    let curPainter = 1;
    let timeLeft = totalTimePerPainter;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] * timePerUnit > totalTimePerPainter) return false;

        if (arr[i] * timePerUnit <= timeLeft) {
            timeLeft = timeLeft - arr[i] * timePerUnit;
        } else {
            curPainter++;
            timeLeft = totalTimePerPainter - arr[i] * timePerUnit;
        }

    }
    return (curPainter <= painter)
}