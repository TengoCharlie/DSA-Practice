## Q2: Count Pair Difference

### Problem Description

You are given an array **A** of **N** integers and an integer **B**. Count the number of pairs `(i,j)` such that `A[i] - A[j] = B` and `i ≠ j`. Since the answer can be very large, return the remainder after dividing the count with `10^9+7`.

---

### Problem Constraints

- `1 <= N <= 10^5`
- `1 <= A[i] <= 10^9`
- `1 <= B <= 10^9`

---

### Input Format

The first argument is an array of integers A and the second argument is an integer B.

---

### Output Format

Return an integer.

---

### Example Input

- Input 1:
  ```
  A = [3, 5, 1, 2]
  B = 4
  ```
- Input 2:
  ```
  A = [1, 2, 1, 2]
  B = 1
  ```

---

### Example Output

- Output 1:
  ```
  1
  ```
- Output 2:
  ```
  4
  ```

---

### Example Explanation

- Explanation 1:
  ```
  The only pair is (2, 3) which gives difference as 4.
  ```
- Explanation 2:
  ```
  The pairs which give the difference as 1 are (2, 1), (4, 1), (2, 3), and (4, 3).
  ```