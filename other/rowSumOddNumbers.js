function rowSumOddNumbers(n) {
  let max = 1;
  let res = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      max += 2

      if (i === n) {
        res += max
      }
    }
  }

  return res || 1;

  // return n*n*n;
  // return Math.pow(n, 3);
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(3), 27);
console.log(rowSumOddNumbers(42), 74088);