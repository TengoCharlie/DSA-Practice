module.exports = function (A, B) {
    const hMap = new Map();
    let count = 0n;
    for (let i = 0; i < A.length; i++) {
        const element = BigInt(A[i]);
        hMap.set(element, (hMap.get(element) || 0n)+ 1n);
    }

    for (let i = 0; i < A.length; i++) {
        const diff = BigInt(A[i]) - BigInt(B);
        let val = hMap.get(diff) || 0n;
        if(diff == BigInt(A[i]) && val >= 2) val--;
        count = count + val;
    }
    return Number(count % BigInt(1000000007));
}