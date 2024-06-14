module.exports = function (A) {
    let ans = 0;
    for(let i = 0; i<A.length; i++){
        ans = ans ^ A[i];
    }
    return ans;
};
