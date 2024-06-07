const copyRandomList = require("./copyRandomList");

describe("Copy List with Random Pointer Tests", () => {
    const cases = [
        // Test cases
        {
            input: {
                nodes: [1, 2, 3],
                randoms: [2, 0, 0]
            },
            expected: {
                nodes: [1, 2, 3],
                randoms: [2, 0, 0]
            }
        },
        {
            input: {
                nodes: [4, 5, 6, 7],
                randoms: [1, 3, 2, 0]
            },
            expected: {
                nodes: [4, 5, 6, 7],
                randoms: [1, 3, 2, 0]
            }
        },
        {
            input: {
                nodes: [4, 5, 6, 7],
                randoms: []
            },
            expected: {
                nodes: [4, 5, 6, 7],
                randoms: [null, null, null, null]
            }
        },
        {
            input: {
                nodes: [],
                randoms: []
            },
            expected: {
                nodes: [],
                randoms: []
            }
        }
    ];

    function LNode(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }

    function createLinkedList(nodes, randoms) {
        const listNodes = nodes.map(val => new LNode(val));
        for (let i = 0; i < nodes.length; i++) {
            if (i < nodes.length - 1) listNodes[i].next = listNodes[i + 1];
            listNodes[i].random = randoms[i] === null ? null : listNodes[randoms[i]];
        }
        return listNodes[0];
    }

    function linkedListToArray(head) {
        const nodes = [];
        const randoms = [];
        const map = new Map();
        let idx = 0;
        let temp = head;
        while (temp) {
            map.set(temp, idx++);
            nodes.push(temp.val);
            temp = temp.next;
        }
        temp = head;
        while (temp) {
            randoms.push(temp.random ? map.get(temp.random) : null);
            temp = temp.next;
        }
        return { nodes, randoms };
    }

    cases.forEach(({ input, expected }) => {
        test(`Should return a deep copy of the list with nodes ${input.nodes} and randoms ${input.randoms}`, () => {
            const listA = createLinkedList(input.nodes, input.randoms);
            const result = copyRandomList(listA);
            const resultArray = linkedListToArray(result);
            expect(resultArray).toEqual(expected);
        });
    });
});
