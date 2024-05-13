## Q3: Subarray Sum Equals K

### Problem Description

Given an array of integers **A** and an integer **B**, find the total number of subarrays having a sum equal to **B**.

---

### Problem Constraints

- `1 <= length of the array <= 50000`
- `-1000 <= A[i] <= 1000`

---

### Input Format

The first argument given is the integer array A.
The second argument given is integer B.

---

### Output Format

Return the total number of subarrays having a sum equal to B.

---

### Example Input

- Input 1:
  ```
  A = [1, 0, 1]
  B = 1
  ```
- Input 2:
  ```
  A = [0, 0, 0]
  B = 0
  ```

---

### Example Output

- Output 1:
  ```
  4
  ```
- Output 2:
  ```
  6
  ```

---

### Example Explanation

- Explanation 1:
  ```
  [1], [1, 0], [0, 1], and [1] are four subarrays having sum 1.
  ```
- Explanation 2:
  ```
  All possible subarrays having sum 0.
  ```