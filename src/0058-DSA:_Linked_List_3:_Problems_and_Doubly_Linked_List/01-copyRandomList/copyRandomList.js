/* NOTE: Noth the solution are correct:
 - Solution 1 : Raw solution with time Complexity O(N) ans space complexity O(1)
 - SOlution 2 : Solution using Hashmap algorithm, time complexity O(N) space complexity O(N)
*/
module.exports = function (A) {
    return solution(A);
    // return solution2(A);
};

function solution2(head) {
    if (!head) return null;

        // Create a map to store the new nodes
        let map = new Map();
    
        // Create a dummy node as the new head
        let dummy = new LNode(-1);
        let newTail = dummy;
    
        // Iterate through the original linked list and create new nodes
        let curr = head;
        while (curr) {
            let newNode = new LNode(curr.val);
            newTail.next = newNode;
            newTail = newNode;
            map.set(curr, newNode);
            curr = curr.next;
        }
    
        // Connect the random pointers of the new nodes
        curr = head;
        let newCurr = dummy.next;
        while (curr) {
            newCurr.random = map.get(curr.random);
            curr = curr.next;
            newCurr = newCurr.next;
        }
    
        return dummy.next;
}

function solution(A) {
  if (A) {
      A = addDuplicateElement(A);
      A = updateRandomPointers(A);
      A = detachOldList(A);
  } 
    return A;
}

function detachOldList(head) {
    head = head.next;
    let temp = head;
    while (temp.next) {
        temp.next = temp.next.next;
        temp = temp.next;
    }
    return head;
}

function updateRandomPointers(head) {
    let temp = head;
    while (temp) {
        if(temp.random) temp.next.random = temp.random.next;
        temp = temp.next.next;
    }
    return head;
}


function addDuplicateElement(head) {
    let temp = head;

    while (temp) {
        let newNode = new LNode(temp.val);
        newNode.next = temp.next;
        temp.next = newNode;
        temp = temp.next.next
    }
    return head;
}


function LNode(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
}

