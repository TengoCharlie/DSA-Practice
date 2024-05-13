module.exports = function (A) {
    return solution(A);
}

function solution(A) {
    // Find Min Max value in the array
    let smallest = A[0];
    let largest = A[0];
    // TC = O(n)
    for (let i = 1; i < A.length; i++) {
        smallest = Math.min(smallest, A[i]);
        largest = Math.max(largest, A[i]);
    }
    // Convert the range to length of array
    const range = largest - smallest + 1;
    const countArr = new Array(range).fill(0, 0, range);
    
    // Count Sort array
     // TC = O(n)
    for (let i = 0; i < A.length; i++) {
        const activeIndex = A[i]-smallest;
        countArr[activeIndex] += 1;
    }
    // Cummulative count conversion to make stable sort

     // TC = O(r)
    for(let i = 1; i<range; i++){
        countArr[i] += countArr[i-1];
    }

    const sorted = new Array(A.length);

    // output sort array
     // TC = O(n)
    for(let i = A.length-1;i>=0; i--){
        const countIndex = A[i]-smallest;
        const sortedIndex = countArr[countIndex] - 1;
        sorted[sortedIndex] = A[i];
        countArr[countIndex]--;
    }

    return sorted;

}


// TC = O(n+n+n+r) => o(3n+r) = O(n+r)