module.exports = function (A, B){
    return solution(A, B);
}

function solution(A, B){
    const ans = new Array();
    let i = 0, j = 0;

    while(i<A.length && j<B.length){
        const minValue = Math.min(A[i], B[j]);
        ans.push(minValue);
        if(minValue == A[i]) i++;
        else j++;
    }

        while(j<B.length){
            ans.push(B[j]);
            j++;
        }

        while(i<A.length){
            ans.push(A[i]);
            i++;
        }

    return ans;

}