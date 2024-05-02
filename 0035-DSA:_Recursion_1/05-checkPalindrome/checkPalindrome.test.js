const checkPalindrome = require("./checkPalindrome");

describe("Check Palandrome Tests", () => {
    const tests =  new Map([
        ["naman", 1],
        ["strings", 0]
    ]);

    tests.forEach((output, input) => {
        it("Should Return same value", () => {
            const result = checkPalindrome(input);
            expect(result).toBe(output);
        })
    })
})