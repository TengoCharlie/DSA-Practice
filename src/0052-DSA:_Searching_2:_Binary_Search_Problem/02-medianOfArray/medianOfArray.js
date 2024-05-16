module.exports = function (A, B){
    return parseFloat(optimisation(A, B));
}
  
  
  function optimisation(A, B){
      if(A.length >= B.length){
          return solve(A, B, A.length, B.length);
      } else {
          return solve(B, A, B.length, A.length);
      }
  }
  
  function solve(A, B, N, M){
      // Find X
      const x = parseInt((N+M)/2);
  
      let l = 0;
      let r = x;
  
      const INT_MIN = Number.MIN_SAFE_INTEGER;
  const INT_MAX = Number.MAX_SAFE_INTEGER;
  
      while(l<=r){
          const mid = Math.floor((l + (r-l)/2));
  
          const c1 = mid;
          const c2 = x-mid;
  
          const l1 = c1 >= 1 ? A[c1-1] : INT_MIN, r1 = c1 < N ? A[c1] : INT_MAX;
          const l2 = c2 >= 1 ? B[c2-1] : INT_MIN, r2 = c2 < M ? B[c2] : INT_MAX;
  
          if(l1<=r2 && l2<=r1){
              if((N+M) % 2 == 1){
                  return Math.min(r1, r2);
              } else {
                  const max = Math.max(l1, l2);
                  const min = Math.min(r1, r2);
                  const avg = parseFloat((min + max) / 2)
                  return avg;
              }
          } else if(l1>r2){
              r = mid-1;
          } else {
              l = mid+1;
          }
      }
      return -1;
  }
    
  