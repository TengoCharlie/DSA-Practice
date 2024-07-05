module.exports = function(A, B){
    let sA = ssort(A);
    return sA[B-1];
}
function ssort(A){
    for(let i = 0; i<A.length; i++){
        let minIndex = i;
        for(let j = i+1; j<A.length; j++){
            if(A[minIndex]>A[j]){
                minIndex = j;
            }
        }
        [A[i], A[minIndex]] = [A[minIndex], A[i]]
    }
    return A;
}
