// 5. Higher-Order Functions
// 5.4 Dominant writing direction

// 5.1 Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(arrays.reduce((flat, curr) => [...flat, ...curr], []), [1, 2, 3, 4, 5, 6]); 



// 5.2 Your own loop
function loop(end, f, f2, cl) {
  for (let n = end; f(n) || f2(n); n--) {
    cl(n)
  }
}

// Book
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

// loop(3, n => n > 0, n => n - 1, console.log);
// 3 → 2 → 1

// 5.3 Everything
function every(array, test) {
  for (let val of array) {
    if (!test(val)) {
      return false
    }
  }

  return true
}

function some(array, test) {
  for (let val of array) {
    if (test(val)) {
      return true
    }
  }

  return false
}

// console.log(every([1, 3, 5], n => n < 10), true);
// console.log(every([2, 4, 16], n => n < 10), false);
// console.log(every([], n => n < 10), true);
