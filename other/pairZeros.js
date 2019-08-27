function pairZeros(arr) {
  let seenPrev = false
  return arr.filter(num => num || (seenPrev = !seenPrev))
}

console.log(
  pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0]),
  [1, 0, 1, 2, 0, 3, 0],
  pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0]) + '' === [1, 0, 1, 2, 0, 3, 0] + '',
)
