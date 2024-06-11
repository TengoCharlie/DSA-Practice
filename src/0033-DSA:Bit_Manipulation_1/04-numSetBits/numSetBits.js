module.exports = function(A){
           let ans = 0;
           for(let i = 0; i<32; i++){
               if(checkBit(A, i)) ans++;
           }
           return ans;
       }
   
   
   function checkBit(A, B){
       if(A&(1<<B)) return true;
       else return false;
   }