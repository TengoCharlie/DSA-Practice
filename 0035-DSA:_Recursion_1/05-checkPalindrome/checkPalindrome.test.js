const checkPalindrome = require("./checkPalindrome");

jest.setTimeout(1000);

describe("Check Palindrome Tests", () => {
    const tests = new Map([
        // ["naman", 1],
        // ["strings", 0],
        ["testttdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdf", 1],
        ["testttdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdftfhgsf", 1],
        ["testttdfgsdfgsdfgsdfgdxfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdf", 1],
        ["testttdfgsdfgsdfgsdfsdfgsgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdf", 1]
    ]);

    tests.forEach((expected, input) => {
        test.concurrent(`should return ${expected} for input "${input}"`, () => {
                const result = checkPalindrome(input);
                expect(result).toBe(expected);
        });
    });
});
