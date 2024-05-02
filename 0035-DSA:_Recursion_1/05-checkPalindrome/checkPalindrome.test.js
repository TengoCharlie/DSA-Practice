const checkPalindrome = require("./checkPalindrome");


describe("Check Palindrome Tests", () => {
    const tests = new Map([
        ["naman", 1],
        ["strings", 0]
    ]);
    
    tests.forEach((expected, input) => {
        test.concurrent(`should return ${expected} for input "${input}"`, () => {
                const result = checkPalindrome(input);
                expect(result).toBe(expected);
        });
    });
});
