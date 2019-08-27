// https://www.codewars.com/kata/5226eb40316b56c8d500030f/solutions/javascript

function pascalsTriangle(n) {
  const arr = Array.from(Array(n), (_, i) => Array(i + 1).fill(1));

  for (let i = 2, endI = arr.length; i < endI; i++) {
    for (let j = 1, endJ = arr[i].length - 1; j < endJ; j++) {
      arr[i][j] = ~~arr[i - 1][j - 1] + ~~arr[i - 1][j];
    }
  }

  return arr.reduce((arr, curr) => [...arr, ...curr], []);
}

// console.log(pascalsTriangle(1), [1]);
// console.log(pascalsTriangle(2), [1, 1, 1]);
console.log(pascalsTriangle(4), [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]);
console.log(pascalsTriangle(6).toString() === [
  1,
  1,
  1,
  1,
  2,
  1,
  1,
  3,
  3,
  1,
  1,
  4,
  6,
  4,
  1,
  1,
  5,
  10,
  10,
  5,
  1
].toString());
