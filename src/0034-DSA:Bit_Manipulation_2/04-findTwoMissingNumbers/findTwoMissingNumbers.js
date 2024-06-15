module.exports = function (A) {
    return solution(A);
};

function solution(A){
    let xorValue = getXorValue(A);
    let setBit = getSetBit(xorValue);
    let setAns = 0;
    let unsetAns = 0;
    for (let i = 0; i < A.length; i++){
        if ((A[i] & (1 << setBit)) > 0) {
            setAns = setAns ^ A[i];
        } else {
            unsetAns = unsetAns ^ A[i];
        }
    }
    for (i = 1; i <= A.length + 2; i++){
        if ((i & (1 << setBit)) > 0) {
            setAns = setAns ^ i;
        } else {
            unsetAns = unsetAns ^ i;
        }
    }

    return setAns > unsetAns ? [unsetAns, setAns] : [setAns, unsetAns];

}

function getSetBit(val) {
    for (let i = 0; i < 32; i++){
        if ((val & (1 << i)) > 0) return i;
    }
}

function getXorValue(A) {
    let xorValue = 0;
    for (let i = 0; i < A.length; i++){
        xorValue = xorValue ^ A[i];
    }
    for (let i = 1; i <= A.length + 2; i++){
        xorValue = xorValue ^ i
    }
    return xorValue;
}