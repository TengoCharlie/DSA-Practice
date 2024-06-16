### Q1. Binary Addition

**Problem Description**

Given two binary numbers A = 1001011 and B = 11001001. What is their sum?

**Answer Options**

- [ ] 100100100
- [x] 100010100
- [ ] 101000100
- [ ] 100010010

You can submit your answer by selecting the correct option.


---

## Solution Approach

### Step-by-Step Solution

1. **Understanding Binary Addition**:
   - Binary addition is similar to decimal addition but it operates on base 2. 
   - The basic rules are:
     - 0 + 0 = 0
     - 1 + 0 = 1
     - 0 + 1 = 1
     - 1 + 1 = 0 (with a carry of 1)

2. **Aligning the Binary Numbers**:
   - Write down the two binary numbers such that their least significant digits (rightmost) are aligned.

     ```
     1001011
    +11001001
     ```

3. **Performing the Addition**:
   - Start adding from the least significant bit (rightmost bit) to the most significant bit (leftmost bit), keeping track of any carry.

   ```
     Carry:    1111110
     Binary:  01001011
            +11001001
     ----------------
     Result:  100010100
   ```

   - Bit by bit addition with carry:
     - 1 + 1 = 0 (carry 1)
     - 1 + 0 + 1(carry) = 0 (carry 1)
     - 0 + 0 + 1(carry) = 1 (carry 0)
     - 1 + 1 = 0 (carry 1)
     - 0 + 0 + 1(carry) = 1 (carry 0)
     - 0 + 1 = 1 (carry 0)
     - 1 + 1 = 0 (carry 1)
     - Final carry of 1

4. **Combining the Result**:
   - Combine the result of each bit addition and the final carry to get the binary sum.

   ```
   Result = 100010100
   ```

### Conclusion

The binary addition of 1001011 and 11001001 results is 100010100. This approach can be applied to any binary numbers to find their sum by performing bit-wise addition from right to left, keeping track of the carry.

