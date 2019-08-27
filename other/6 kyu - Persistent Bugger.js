function persistence(num) {
  let arr = num.toString().split('')
  let count = 0

  while (arr.length > 1) {
    arr = arr
      .reduce((sum, curr) => (sum *= curr))
      .toString()
      .split('')
    count++
  }

  return count
}

console.log(persistence(39), 3)
// console.log(persistence(4), 0)
// console.log(persistence(25), 2)
// console.log(persistence(999), 4)
