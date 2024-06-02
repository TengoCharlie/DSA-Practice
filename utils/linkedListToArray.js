module.exports = function (list) {
  const arr = [];
  let temp = list;
  while (temp) {
    arr.push(temp.data);
    temp = temp.next;
  }
  return arr;
};
