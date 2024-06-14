### Q2. Single Number II

**Problem Description**

Given an array of integers **A**, every element appears **three times** except for one. Find that single one which does not appear three times.

**NOTE:** Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

**Problem Constraints**

```
1 <= |A| <= 2000000
0 <= A[i] <= INTMAX
```

**Input Format**

The first and only argument of input contains an integer array A.

**Output Format**

Return a single integer denoting the single element.

**Example Input**

Input 1:
```
A = [2, 2, 3, 2]
```

Input 2:
```
A = [0, 1, 0, 1, 0, 1, 99]
```

**Example Output**

Output 1:
```
3
```

Output 2:
```
99
```

**Example Explanation**

Explanation 1:
```
3 occurs only once.
```

Explanation 2:
```
99 occurs only once.
```