### Q5. Bit Operations - 1

**Problem Description**

If \( a \& 1 = 1 \), then \( a \) is?

**Answer Options**

- [ ] even
- [x] odd
- [ ] can be either odd or even

You can submit your answer by selecting the correct option.

---

## Solution Approach

### Step-by-Step Solution

1. **Understanding Bitwise AND Operation**:
   - The bitwise AND operation between two bits results in 1 only if both bits are 1.
   - Example: \( 1 \& 1 = 1 \), \( 1 \& 0 = 0 \), \( 0 \& 1 = 0 \), \( 0 \& 0 = 0 \).

2. **Analyzing \( a \& 1 \) Operation**:
   - The number 1 in binary is \( 0001 \).
   - Performing the AND operation between any number \( a \) and 1 will check the least significant bit (rightmost bit) of \( a \).

3. **Determining the Parity**:
   - If the result of \( a \& 1 \) is 1, it means the least significant bit of \( a \) is 1.
   - If the least significant bit is 1, \( a \) must be an odd number.
   - Conversely, if the least significant bit is 0, \( a \) would be even.

### Conclusion

Given the condition \( a \& 1 = 1 \), it confirms that \( a \) is an odd number. Therefore, the correct answer is "odd".