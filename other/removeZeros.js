const bubbleSort = arr => {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    let wasSwap = false

    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        console.log([arr[j], arr[j + 1]], [arr[j + 1], arr[j]])
        wasSwap = true
      }
    }

    if (!wasSwap) break
  }

  return arr
}

function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc

  // the correctly sorted array should be returned.
  for (let i = 0, endI = array.length - 1; i < endI; i++) {
    let wasSwap = false
    let prev;

    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      console.log(array, prev, array[j] !== prev, typeof array[j], array[j], array[j] == 0, typeof array[j + 1], array[j + 1])
      if (array[j] == 0 && array[j] !== prev) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        prev = array[j]
        wasSwap = true
      }
    }

    if (!wasSwap) break;
  }

  return array
}

const input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
const solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
const input2 = [1, null, '5', '0', '2', 0, 8, 6, null, false]
const solution2 = [1, null, '5', '2', 8, 6, null, false, '0', 0]
const input3 = [1, '0', 2, 0, 52, '0', 7, 0, '3', 1]
const solution3 = [1, 2, 52, 7, '3', 1, '0', 0, '0', 0]
const input4 = ['0', '0', '0', 0, 1]
const solution4 = [1, '0', '0', '0', 0]
// [ { a: [ 'code' ] }, 0, { b: [ 'wars' ] }, 1 ]
// console.log(bubbleSort(input), bubbleSort)
// console.log(bubbleSort(input), bubbleSort2)
// console.log(
//   JSON.stringify(removeZeros(input)),
//   JSON.stringify(solution),
//   JSON.stringify(removeZeros(input)) === JSON.stringify(solution),
// )
console.log(
  JSON.stringify(removeZeros(input4)),
  JSON.stringify(solution4),
  JSON.stringify(removeZeros(input4)) === JSON.stringify(solution4),
)
