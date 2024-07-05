module.exports = function(A){
    const sortedArr = A.sort((a, b) => b-a);
    let count = null;
    if(sortedArr[0] == 0) return 1;
    for(let i = 1; i< sortedArr.length; i++){
        if(sortedArr[i] != sortedArr[i-1]){
            count = i;
        }

        if(count == sortedArr[i]){
            return 1
        }
    }
    return -1;

}

