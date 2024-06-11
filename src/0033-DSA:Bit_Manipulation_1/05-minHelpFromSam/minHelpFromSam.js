module.exports = function (A) {
    let cnt = 0;
    for(let i = 0; i<32; i++){
        if(A & (1<<i)) cnt++;
    }
    return cnt;
};


