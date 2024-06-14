module.exports = function (A) {
    let ans = 0;
    for(let i = 0; i<32; i++){
        let cnt = 0;
        for(let j = 0; j<A.length; j++){
            if((A[j] & (1 << i)) > 0){
                cnt++;
            }
        }
        if(cnt % 3 == 1){
            ans = ans | (1 << i);
        }
    }
    return ans;
};
