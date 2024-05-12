module.exports = function (A){
    return solution(A);
}


function solution(A){
    A.sort((a, b) => {
        if(getFactorsCount(a) === getFactorsCount(b)){
            return a-b;
        } else {
            return getFactorsCount(a)-getFactorsCount(b)
        }
    })
    return A;
}

function getFactorsCount(val){
    let i = Math.floor(Math.sqrt(val));
    let count = 0;
    while(i > 0){ 
        if(val%i == 0){
            if(val/i == i){
                count++;
            } else count+=2;
        }
        i--;
    }
    console.log(count, val )
    return count;
}