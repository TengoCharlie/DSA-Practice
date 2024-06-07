### Q2. LRU Cache

**Problem Description**

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

- `get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return `-1`.
- `set(key, value)` - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting the new item.

The LRUCache will be initialized with an integer corresponding to its capacity. Capacity indicates the maximum number of unique keys it can hold at a time.

**Definition of "least recently used"**: An access to an item is defined as a get or a set operation of the item. "Least recently used" item is the one with the oldest access time.

**NOTE**: If you are using any global variables, make sure to clear them in the constructor.

**Example**

```
Input : 
         capacity = 2
         set(1, 10)
         set(5, 12)
         get(5)        returns 12
         get(1)        returns 10
         get(10)       returns -1
         set(6, 14)    this pushes out key = 5 as LRU is full. 
         get(5)        returns -1 
```

**Guidelines for Input**

There is 1 line in the input:

Line 1 (Corresponds to arg 1): The line starts with a pair of numbers `numOperations` and `capacity`. Capacity is the number your constructor is initialized with. Then `numOperations` operations follow. Each operation is either:
- `G <number>`: This corresponds to a function call `get(<number>)`.
- `S <num1> <num2>`: This corresponds to a function call `set(num1, num2)`.

Note that the function calls are made in order.