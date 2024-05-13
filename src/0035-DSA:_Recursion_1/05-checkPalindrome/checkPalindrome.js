//param A : string
//return an integer
module.exports =  function (A) {
    // return bruteForce(A);
    return optimisation(A);
}

// Using Recursion
function optimisation(A) {
    if (A.length <= 1) return 1;

    A = A.split(" ").join("");
    // return isPalindrome_0(0, A);
    return isPalindrome(A);
}

// using recursion without readability
function isPalindrome_0(i, arr) {
    if (arr[i] !== arr[arr.length - 1 - i]) return 0;
    if (i == Math.floor(arr.length / 2) - 1) return 1;
    return isPalindrome_0(i + 1, arr);
}

// Using recursion with readability;
function isPalindrome(s, start = 0, end = s.length - 1) {
    // Base case: If start index crosses end index, it's a palindrome
    if (start >= end) return 1;
  
    // Check if the characters at start and end are the same
    if (s[start] !== s[end]) return 0;
  
    // Move inward and check the substring
    return isPalindrome(s, start + 1, end - 1);
}





function bruteForce(A) {
    A = A.split(' ').join('');
    // BF
    let loopCount = 0;
    const length = A.length;

    if (length % 2 == 0) loopCount = length / 2;
    else loopCount = (length - 1) / 2
    
    for (let i = 0, j = length - 1; i < loopCount, j >= loopCount; i++, j--) {
        if (A[i] != A[j]) return 0;
    }
    
    return 1;
}

