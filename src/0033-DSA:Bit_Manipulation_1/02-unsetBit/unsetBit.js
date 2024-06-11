module.exports = function (A, B) {
      // return A & ~(1 << B);
  if ((A & (1 << B)) <= 0) return A;
  else return A ^ (1 << B);
};


