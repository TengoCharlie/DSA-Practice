const {LRUCache} = require("./LRUCache");


describe("LRU Cache Tests", () => {
    const cases = [
        {
            capacity: 2,
            operations: ["S 1 10", "S 5 12", "G 5", "G 1", "G 10", "S 6 14", "G 5"],
            expected: [null, null, 12, 10, -1, null, -1]
        },
        {
            capacity: 1,
            operations: ["S 2 1", "G 2", "S 3 2", "G 2", "G 3"],
            expected: [null, 1, null, -1, 2]
        }
    ];

    cases.forEach(({ capacity, operations, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const lruCache = new LRUCache(capacity);
            const results = operations.map(operation => {
                const [op, key, value] = operation.split(" ");
                if (op === "G") {
                    return lruCache.get(Number(key));
                } else if (op === "S") {
                    lruCache.set(Number(key), Number(value));
                    return null;
                }
            });
            expect(results).toEqual(expected);
        });
    });
});
