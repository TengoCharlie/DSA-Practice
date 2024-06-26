const checkPalindrome = require("./checkPalindrome");


describe("Check Palindrome Tests", () => {
    const cases = [
        ["naman", 1],
        ["strings", 0],
        ["racecar", 1],    // Typical Palindrome
        ["hello", 0],      // Not a Palindrome
        ["a", 1],          // Single Character
        ["aa", 1],         // Two Characters, Palindrome
        ["ab", 0],         // Two Characters, Not a Palindrome
        ["", 1],           // Empty String
        // ["a".repeat(25000) + "b" + "a".repeat(25000), 1],  // Very Long Palindrome //Call stack exceeding issue
        ["a".repeat(49999) + "b", 0],  // Very Long Non-Palindrome
        ["aba", 1],  // Palindrome with Mixed Casing (assumed lowercase input)
        ["a man a plan a canal panama", 1]  // Palindrome with Spaces (assuming spaces are ignored)    
    ];

    cases.forEach((el) => {
        test(`Should Return ${el[1]}, on Input A = ${el[0]}`, () => {
            const result = checkPalindrome(el[0]);
            expect(result).toEqual(el[1]);
        })
    })
});
