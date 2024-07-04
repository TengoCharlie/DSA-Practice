### Q3. Decimal to Binary - MCQ

**Problem Description**

Which of the following is a correct conversion of 76 (base 10) to binary?

**Answer Options**

- [ ] 1010000
- [ ] 1001010
- [ ] 1001100
- [x] 1001110

You can submit your answer by selecting the correct option.


---

## Solution Approach

### Step-by-Step Solution

1. **Understanding Decimal to Binary Conversion**:
   - Decimal numbers are base 10, whereas binary numbers are base 2.
   - To convert from decimal to binary, repeatedly divide the number by 2 and keep track of the remainders.

2. **Dividing the Decimal Number**:
   - Start with the decimal number 76 and repeatedly divide by 2, noting the quotient and the remainder each time.

     ```
     76 ÷ 2 = 38 remainder 0
     38 ÷ 2 = 19 remainder 0
     19 ÷ 2 = 9 remainder 1
     9 ÷ 2 = 4 remainder 1
     4 ÷ 2 = 2 remainder 0
     2 ÷ 2 = 1 remainder 0
     1 ÷ 2 = 0 remainder 1
     ```

3. **Writing the Binary Number**:
   - Write the remainders from bottom to top to get the binary equivalent.
     ```
     1001100
     ```

4. **Combining the Result**:
   - The binary representation of 76 is 1001100.

### Conclusion

The correct conversion of 76 (base 10) to binary is 1001100. This approach can be applied to any decimal number to find its binary equivalent by repeatedly dividing by 2 and noting the remainders.