module.exports = function (A, B) {
       let val1 = 0;
       let val2 = 0;
       let carry = 0;
       let sum = 0;
       let ans = [];
   
       if (A.length > B.length) {
           size = A.length+1
       }
       else {
           size = B.length+1;
       }
       B = B.padStart(size, '0');
       A = A.padStart(size, '0');
       for(let i = 0; i<size; i++){
           ans[i] = 0;
       }
   
       let i = 1;
   
       while (i <= size) {
           val1 = parseInt(A[size - i])
           val2 = parseInt(B[size - i]);
           [sum, carry] = sumOfBinary(carry, val1, val2);
           ans[size - i] = sum;
           i++;
       }
       let res = '';
       ans.forEach((el, i) => {
           if (i == 0 && el < 1) {
           } else {
               res = res.concat(el);
           }
       })
       return res;
   }
   
   function sumOfBinary(carry, val1, val2) {
       const sum = carry + val1 + val2;
       return [Math.floor(sum % 2), Math.floor(sum / 2)];
   }