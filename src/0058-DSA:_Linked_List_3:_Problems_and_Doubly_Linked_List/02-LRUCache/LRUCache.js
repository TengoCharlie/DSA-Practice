// NOTE: This solution Is working But it needs Improvisation, hence this will be updated in next commit
// Constructor : Initializes the LRUCache with capacity
module.exports = {
  LRUCache: function (capacity) {
    let valMap = new Map();
    let nodeMap = new Map();
    let head = null;
    let tail = null;
    let size = capacity;

    function addNewNode(key, value) {
      if (size <= 0) {
        nodeMap.delete(tail.data);
        valMap.delete(tail.data);
        if (tail == head) {
          tail = null;
          head = null;
        } else {
          tail.prev.next = null;
          tail = tail.prev;
        }
        size++;
      }

      const temp = new DLNode(key);
      if (head) head.prev = temp;
      temp.next = head;
      head = temp;
      head.prev = null;

      valMap.set(key, value);
      nodeMap.set(key, temp);
      if (size >= capacity) {
        tail = head;
      }
      size--;
    }

    function updateNode(key, value = null) {
      const temp = nodeMap.get(key);
      if (temp == head) {
        if (value) {
          valMap.set(key, value);
          return;
        } else return valMap.get(key);
      }
      if (temp == tail) {
        tail = temp.prev;
      }
      if (temp.prev) temp.prev.next = temp.next;
      if (temp.next) temp.next.prev = temp.prev;

      head.prev = temp;
      temp.next = head;
      head = temp;
      head.prev = null;

      if (value) valMap.set(key, value);
      else return valMap.get(key);
    }

    return {
      // get function returns an integer
      get: function (key) {
        if (!nodeMap.has(key)) {
          return -1;
        } else {
          const res = updateNode(key);
          return res;
        }
      },
      // set returns nothing
      set: function (key, value) {
        if (!capacity) return null;
        if (!nodeMap.has(key)) {
          addNewNode(key, value);
        } else {
          updateNode(key, value);
        }
      },
    };
  },
};

class DLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
