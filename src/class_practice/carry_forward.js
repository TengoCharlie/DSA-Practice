// Carry_forward
function min_max() {
    const A = [3, 6, 4, 8, 3, 7, 2, 1, 6, 8, 5, 3, 4, 1];
    const N = A.length;
    const max = Math.max(...A);
    const min = Math.min(...A);

    let iMax = -1;
    let iMin = -1;

    let ans = N;

    for (let i = 0; i < N; i++) {
        if (A[i] == min) {
            iMin = i;
        }
        else if (A[i] == max) {
            iMax = i;
        }

        if (iMax >= 0 && iMin >= 0) {
            const length = Math.abs(iMax - iMin);
            ans = Math.min(ans, length);
        }
    }
    return ans;
}