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
- [ ] O(n + n log n)
