### Q3. Time Complexity-ii

**Problem Description**

What is the time complexity of the following code snippet?

**Code Snippets**

- **C++**
    ```cpp
    vector v;

    int n;

    for(int i = 0; i < n; i++){
        v.push_back(i);
    }

    sort(v.begin(), v.end());
    ```

- **Java**
    ```java
    ArrayList v = new ArrayList();

    for(int i = 0; i < n; i++){
        v.append(i);
    }

    Collections.sort(v);
    ```

- **Python**
    ```python
    v = []
    for i in range(n):
        v.append(i)

    v.sort()
    ```

**Answer Options**

- [ ] O(n)
- [ ] O(n^2)
- [ ] O(n log n)
- [x] O(n + n log n)

You can submit your answer by selecting the correct option.

---

## Solution Approach

### Step-by-Step Solution

1. **Understanding the Code Snippet**:
   - The code initializes a vector/array list.
   - It then appends integers from 0 to n-1 to the list.
   - Finally, it sorts the list.

2. **Analyzing Time Complexity**:
   - The `for` loop runs `n` times, each time performing a `push_back` or `append` operation which is `O(1)` on average.
     - Therefore, the loop has a time complexity of `O(n)`.
   - The `sort` function typically uses an efficient sorting algorithm like Timsort or QuickSort, which has an average time complexity of `O(n log n)`.

3. **Combining the Time Complexities**:
   - The total time complexity is the sum of the time complexities of the two operations:
     - Inserting `n` elements: `O(n)`
     - Sorting `n` elements: `O(n log n)`
   - Thus, the overall time complexity is `O(n + n log n)`.

### Conclusion

The time complexity of the given code snippet is `O(n + n log n)`. This approach can be applied to similar problems by breaking down each step and analyzing the time complexity of each operation, then combining them for the total complexity.