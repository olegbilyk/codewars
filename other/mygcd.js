const mygcd = function gcd(x, y) {
  let newY = x % y

  if (newY > 0) {
    return gcd(y, newY)
  }

  return y
}


// console.log(mygcd(17, 13), 1)
// console.log(mygcd(40, 20), 6)
console.log(mygcd(30, 12), 6)
// console.log(mygcd(8, 9), 1)
// console.log(mygcd(1, 1), 1)
