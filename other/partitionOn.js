function partitionOn(pred, items) {
  const arrA = []
  const arrB = []

  for (let item of items) {
    if (pred(item)) {
      arrA.push(item)
    } else {
      arrB.push(item)
    }
  }

  items.splice(0, items.length, ...[...arrB, ...arrA])

  return arrB.length
}

var items = [1, 2, 3, 4, 5, 6]

function isEven(n) {
  return n % 2 == 0
}

var i = partitionOn(isEven, items)

console.log(i, 3, items, 'partioned at 3')
console.log(items.slice(0, i), [1, 3, 5])
// console.log(items.slice(i), [2, 4, 6])
