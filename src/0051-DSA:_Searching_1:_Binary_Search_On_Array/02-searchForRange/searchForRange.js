module.exports = function (A, B) {
    return Solution(A, B);
}

function Solution(A, B) {
    const N = A.length - 1;

    if (N == 0) {
        if (A[N] == B) return [0, 0];
        else return [-1, -1];
    } else if (N == 1) {
        if (A[0] == B && A[N] == B) return [0, 1]
        else if (A[0] == B && A[N] !== B) return [0, 0]
        else if (A[0] !== B && A[N] == B) return [N, N]
        else return [-1, -1]
    }

    let lo = 1;
    let hi = N - 1;
    const ans = new Array(2).fill(-1);

    if (A[0] == B) ans[0] = 0;
    if (A[N] == B) ans[1] = N;

    while (lo <= hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);

        if (A[mid] == B) {
            if (ans[0] < 0) {
                while (lo <= mid && A[lo] != B) {
                    lo++;
                }
                if (lo < mid) ans[0] = lo;
                else ans[0] = mid;
            }

            if (ans[1] < 0) {
                while (mid <= hi && A[hi] != B) {
                    hi--
                }
                if (hi > mid) ans[1] = hi;
                else ans[1] = mid;

            }
            return ans;
        } else if (A[mid] < B) {
            lo = mid + 1;
        } else {
            hi = mid - 1
        }
    }

    return ans
}
