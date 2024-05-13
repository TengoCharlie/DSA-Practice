### Q1. Sorted Insert Position

**Problem Description**  
You are given a sorted array **A** of size **N** and a target value **B**.
- If the target value is **present**, return its index.
- If the target value is **not found**, return the index of the least element greater than or equal to **B**.
- If the target value is **not found** and a **least number greater than or equal to the target is also not present**, return the length of the array (i.e., the position where the target can be placed).

Your solution should have a time complexity of O(log(N)).

**Problem Constraints**
- 1 <= N <= 100,000
- 1 <= A[i], B <= 100,000

**Input Format**  
The first argument is an integer array **A** of size **N**.  
The second argument is an integer **B**.

**Output Format**  
Return an integer denoting the index of the target value.

**Example Input**
- Input 1:
  ```
  A = [1, 3, 5, 6]
  B = 5
  ```
- Input 2:
  ```
  A = [1, 4, 9]
  B = 3
  ```

**Example Output**
- Output 1:
  ```
  2
  ```
- Output 2:
  ```
  1
  ```

**Example Explanation**
- Explanation 1:
  ```
  The target value is present at index 2.
  ```
- Explanation 2:
  ```
  The target value should be inserted at index 1.
  ```
