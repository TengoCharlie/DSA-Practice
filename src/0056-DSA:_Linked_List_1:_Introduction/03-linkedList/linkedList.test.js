const LinkedList = require("./linkedList");

describe("Aggressive Cows Problem Tests", () => {
    const cases = [

        {
            action: [
                {
                    type: 'insert',
                    pos: 1,
                    value: 23
                },
                {
                    type: 'insert',
                    pos: 2,
                    value: 24
                },
                {
                    type: 'print'
                },
                {
                    type: 'delete',
                    pos: 1
                },
                {
                    type: 'print'
                }
            ],
            expected: ["23 24", "24"]
        },
        {
            actions: [
                { type: "insert", pos: 1, value: 54 },
                { type: "delete", pos: 10 },
                { type: "print" }
            ],
            expected: ["54"]
        }
        // Add more test cases as needed
    ];
    cases.forEach(({ actions, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const linkedList = new LinkedList();
            const results = [];
            actions.forEach(action => {
                if (action.type === "insert") {
                    linkedList.insert_node(action.position, action.value);
                } else if (action.type === "delete") {
                    linkedList.delete_node(action.position);
                } else if (action.type === "print") {
                    results.push(linkedList.print_ll().trim());
                }
            });
            expect(results).toEqual(expected);
        });
    });
});
