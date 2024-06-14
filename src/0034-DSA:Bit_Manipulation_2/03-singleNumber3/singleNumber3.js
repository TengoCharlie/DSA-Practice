module.exports = function (A) {
  return solution(A);
};

function solution(A) {
  const xorValue = getXorVal(A);
  console.log(xorValue);
  const setIndex = getSetBitIndex(xorValue);
  console.log(setIndex);
  let setAns = 0;
  let unsetAns = 0;
  for (let i = 0; i < A.length; i++) {
    if ((A[i] & (1 << setIndex)) > 0) {
      setAns = setAns ^ A[i];
    } else {
      unsetAns = unsetAns ^ A[i];
    }
  }

  return setAns > unsetAns ? [unsetAns, setAns] : [setAns, unsetAns];
}

function getSetBitIndex(val) {
  for (let i = 0; i < 32; i++) {
    if ((val & (1 << i)) > 0) return i;
  }
}

function getXorVal(A) {
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    ans = ans ^ A[i];
  }
  return ans;
}
