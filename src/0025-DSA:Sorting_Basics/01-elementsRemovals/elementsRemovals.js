module.exports = function (A) {
    let sortedArray = A.ssort();
    let ans = 0;
    for (let i = 0; i < sortedArray.length; i++){
        ans += sortedArray[i] * (i+1);
    }
    return ans;
}

Array.prototype.ssort = function () {
    let arr = this;
    let lengthOfArray = arr.length;
    for (let i = 1; i < lengthOfArray; i++){
        let j = i - 1;
        while (j < lengthOfArray && arr[j] < arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            j--;
        }
    }
    return arr;
}