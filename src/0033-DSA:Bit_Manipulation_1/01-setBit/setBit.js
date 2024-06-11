module.exports = function (A, B) {
    let x = 0;
    // return x | Math.pow(2, A) | Math.pow(2, B);
    return x | 1 << A | 1 << B
};
