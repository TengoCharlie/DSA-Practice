### Q2. Binary to Decimal - III

**Problem Description**

Which of the following is the correct conversion of 10101101 (base 2) to decimal?

**Answer Options**

- [ ] 175
- [x] 173
- [ ] 171
- [ ] 169

You can submit your answer by selecting the correct option.


---

## Solution Approach

### Step-by-Step Solution

1. **Understanding Binary to Decimal Conversion**:
   - Binary numbers are base 2, whereas decimal numbers are base 10.
   - To convert from binary to decimal, each digit of the binary number is multiplied by 2 raised to the power of its position from right (starting at 0).

2. **Writing Down the Binary Number**:
   - Write down the binary number with positions indicated:
     ```
     1 0 1 0 1 1 0 1
     ```

3. **Calculating the Decimal Value**:
   - Start from the rightmost bit (least significant bit) and move to the left (most significant bit):
     - \(1 \times 2^7 = 128\)
     - \(0 \times 2^6 = 0\)
     - \(1 \times 2^5 = 32\)
     - \(0 \times 2^4 = 0\)
     - \(1 \times 2^3 = 8\)
     - \(1 \times 2^2 = 4\)
     - \(0 \times 2^1 = 0\)
     - \(1 \times 2^0 = 1\)

4. **Summing Up the Values**:
   - Add up all the values calculated in the previous step:
     ```
     128 + 0 + 32 + 0 + 8 + 4 + 0 + 1 = 173
     ```

### Conclusion

The correct conversion of 10101101 (base 2) to decimal is 173. This approach can be applied to any binary number to find its decimal equivalent by multiplying each bit by 2 raised to its position power and summing up the results.