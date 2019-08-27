function comp(array1 = [], array2 = []) {
  return (
    Array.isArray(array2) &&
    array2.map(num => Math.sqrt(num)).filter(num => {
      const i = array1.indexOf(num);
      delete array1[i];
      return i !== -1;
    }).length === array1.length
  );
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19
];

console.log(comp(a1, a2), true);
console.log(comp([2, 2, 3], [4, 9, 9]), true);
