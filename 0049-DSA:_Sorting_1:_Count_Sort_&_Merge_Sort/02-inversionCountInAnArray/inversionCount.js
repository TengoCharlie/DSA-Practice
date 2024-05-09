module.exports = function (A){
    return bruteForce(A);
}

function bruteForce(A){
    let count = 0;
    for(let i = 0; i<A.length-1; i++){
        for(let j = 1; j<A.length; j++){
            if(i<j && A[i] > A[j]){
                count += 1;
            }
        }
    }
    return count % (Math.pow(10, 9) + 7);
}