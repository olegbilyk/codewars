
// console.log(292 / (262 / 162));
// console.log(262 / (292 / 181));
// transpose = m => m[0].map((x,i) => m.map(x => x[i]))

function trans(arr) {
  for (let row = 0, endRow = arr.length; row < endRow; row++) {
    console.log(row, 'row');
    for (let col = 0, endCol = row; col < endCol; col++) {
      console.log(row, 'row', col, 'col');

      console.log(row, col, arr[row][col], '[row][col]')
      console.log('-------');
      console.log(col, row, arr[col][row], '[col][row]')
      // ;[arr[col][row], arr[row][col]] = [arr[row][col], arr[col][row]]
    }
  }

  return arr
}

// function transpose(matrix) {
//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < i; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//   }

//   return
// }

// console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[1, 4, 7], [2, 5, 8], [3, 6, 9]])
// console.log(trans([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[1, 4, 7], [2, 5, 8], [3, 6, 9]])
console.log(trans([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
// console.log(trans([ [1, 2],
//   [3, 4],
//   [5, 6]]));
// console.log(​​`[ [ 1, 5, 9, 13 ],​​​​​ [ 2, 6, 10, 14 ],​​​​​ [ 3, 7, 11, 15 ],​​​​​ [ 4, 8, 12, 16 ] ]`);

// [[1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [9, 10, 11, 12],
//  [13, 14, 15, 16]]

// [ [1, 2],
//   [3, 4],
//   [5, 6]]

// [ [1, 4],
//   [2, 5],
//   [3, 6]]

// [ [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]]

// [[1, 4, 7],
//  [2, 5, 8],
//  [3, 6, 9]]