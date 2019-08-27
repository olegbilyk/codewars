const mygcd = function gcd(x, y) {
  let newY = x % y;

  if (newY > 0) {
    return gcd(y, newY);
  }

  return y;
}

function reduce(fraction) {
  const gcd = mygcd(...fraction);

  return fraction.map(fr => fr / gcd)
}

console.log(reduce([60, 20]), [3, 1])
console.log(reduce([80, 120]), [2, 3])