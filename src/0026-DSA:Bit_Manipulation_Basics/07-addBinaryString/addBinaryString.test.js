const addBinaryStrings = require("./addBinaryString");

describe("Add Binary Strings Tests", () => {
    const cases = [
        // Test cases
        {
            input: ["100", "11"],
            expected: "111"
        },
        {
            input: ["110", "10"],
            expected: "1000"
        },
        {
            input: ["0", "0"],
            expected: "0"
        },
        {
            input: ["1111", "1"],
            expected: "10000"
        },
        {
            input: ["1010", "1011"],
            expected: "10101"
        },
        {
            input: ["111", "111"],
            expected: "1110"
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const result = addBinaryStrings(...input);
            expect(result).toEqual(expected);
        });
    });
});
