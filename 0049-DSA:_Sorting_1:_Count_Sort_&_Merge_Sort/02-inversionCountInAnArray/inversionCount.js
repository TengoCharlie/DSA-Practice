const solve = function (A) {


function optimise(A) {
    return inversionCount(A, 0, A.length-1);
}

function inversionCount(A, l, r) {
    if (l == r) {
        return 0;
    }

    let m = Math.floor((l+r)/2);

    let x = inversionCount(A, l, m);
    let y = inversionCount(A, m+1, r);
    let z = inversionValueCount(A, l, m , r);

    return (x + y + z) % (Math.pow(10, 9) + 7);
}

function inversionValueCount(A, l, m, r) {
    let count = 0;
    
    let i = l;
    let j = m+1;
    let temp = new Array()
    let k = 0;

    while(i<= m && j<= r){
        if(A[i]<A[j]){
            temp[k] = A[i];
            i++;
            k++;
        } else {
            temp[k] = A[j];
            j++;
            count += m-i+1;
            k++;
        }
    }

    while(i<=m){
        temp[k] = A[i];
        i++;
        k++;
    }

    while(j<=r){
        temp[k] = A[j];
        j++;
        k++;
    }

    let idx = 0;
    for(let i = l; i<=r; i++){
        A[i] = temp[idx++];
    }

    return count;
}

return optimise(A);
}

function bruteForce(A) {
    let count = 0;
    for (let i = 0; i < A.length - 1; i++) {
        for (let j = 1; j < A.length; j++) {
            if (i < j && A[i] > A[j]) {
                count += 1;
            }
        }
    }
    return count % (Math.pow(10, 9) + 7);
}


module.exports = solve;