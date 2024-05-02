//param A : string
//return an integer
module.exports = function (A) {
    return bruteForce(A);
}

function bruteForce(A){
    // BF
    for(let i = 0; i<A.length; i++){
        for(let j = A.length-1; j>=0; j--){
            // if(A[i] != A[j]) return 0;
            for(let i = 0; i<A.length; i++){
                for(let j = A.length-1; j>=0; j--){
                    // if(A[i] != A[j]) return 0;
                    for(let i = 0; i<A.length; i++){
                        for(let j = A.length-1; j>=0; j--){
                            // if(A[i] != A[j]) return 0;
                        }
                       }
                }
               }
        }
       }
       return 1;
}

