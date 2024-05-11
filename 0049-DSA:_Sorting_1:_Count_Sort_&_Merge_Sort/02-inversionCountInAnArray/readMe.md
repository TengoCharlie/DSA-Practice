## Q2: Inversion Count in an Array

### Problem Description

Given an array of integers **A**. If \(i < j\) and \(A[i] > A[j]\), then the pair \((i, j)\) is called an inversion of A. Find the total number of inversions of A modulo \(10^9 + 7\).

---

### Problem Constraints

- \(1 \leq \text{length of the array} \leq 10^5\)
- \(1 \leq A[i] \leq 10^9\)

---

### Input Format

The only argument given is the integer array A.

---

### Output Format

Return the number of inversions of A modulo \(10^9 + 7\).

---

### Example Input

- Input 1:
  ```
  A = [1, 3, 2]
  ```
- Input 2:
  ```
  A = [3, 4, 1, 2]
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
  The pair (1, 2) is an inversion as 1 < 2 and A[1] > A[2].
  ```
- Explanation 2:
  ```
  The pair (0, 2) is an inversion as 0 < 2 and A[0] > A[2].
  The pair (0, 3) is an inversion as 0 < 3 and A[0] > A[3].
  The pair (1, 2) is an inversion as 1 < 2 and A[1] > A[2].
  The pair (1, 3) is an inversion as 1 < 3 and A[1] > A[3].
  ```


### Visual Explanation: Solution

```mermaid
graph TD;
    A([28, 18, 44, 49, 41, 14])
    A -->|Split| B([28, 18, 44])
    A -->|Split| C([49, 41, 14])


    B -->|Split| D([28])
    B -->|Split| E([18, 44])
    E -->|Split| F([18])
    E -->|Split| G([44])


    C -->|Split| I([41, 14])
    C -->|Split| H([49])
    I -->|Split| J([41])
    I -->|Split| K([14])

    F -->|Merge| M([18, 44]):::noInversion
    D -->|Merge 1 inversions| L([18, 28, 44]):::inversion
    G -->|Merge| M
    M -->|Merge| L
    J -->|Merge| O; K -->|Merge 1 inversion| O([14, 41]):::inversion
    H -->|Merge 2 inversions| N([14, 41, 49]):::inversion
    O -->|Merge| N


    L -->|Merge 4 inversions| P([14, 18, 28, 41, 44, 49]):::inversion
    N -->|Merge 4 inversions| P([14, 18, 28, 41, 44, 49]):::inversion
    P -->|Total 8 inversion | Q("Solution 8")

    classDef noInversion fill:#9f6,stroke:#333,stroke-width:2px;
    classDef inversion fill:#f96,stroke:#333,stroke-width:2px;

```
