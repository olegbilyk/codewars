function isNarcissistic(n) {
  return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
}

console.log(isNarcissistic(153), true)