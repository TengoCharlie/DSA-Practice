### Q1. Middle Element of Linked List

**Problem Description**

Given a linked list of integers, find and return the middle element of the linked list.

**NOTE:** If there are **N** nodes in the linked list and N is even, then return the (N/2 + 1)<sup>th</sup> element.

**Problem Constraints**

```
1 <= length of the linked list <= 100000
1 <= Node value <= 10^9
```

**Input Format**

The only argument given is the head pointer of the linked list.

**Output Format**

Return the middle element of the linked list.

**Example Input**

Input 1:

```
1 -> 2 -> 3 -> 4 -> 5
```

Input 2:

```
1 -> 5 -> 6 -> 2 -> 3 -> 4
```

**Example Output**

Output 1:

```
3
```

Output 2:

```
2
```

**Example Explanation**

Explanation 1:

The middle element is 3.

Explanation 2:

The middle element in an even length linked list of length N is the ((N/2) + 1)<sup>th</sup> element, which is 2.

