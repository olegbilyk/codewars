function countZeroRowsAndColumns(arr1, arr2) {
  let res = 0;
  const arr = [];
  const rows = arr1.length;
  const cols = arr1[0].length;

  for (let row = 0; row < rows; row++) {
    let wasZero = true;

    for (let col = 0; col < cols; col++) {
      const addRes = arr1[row][col] + arr2[row][col];
      let colRes = arr[col];

      if ((colRes === 0 && addRes !== 0) || colRes == undefined) {
        arr[col] = addRes;
      }

      if (wasZero && addRes !== 0) {
        wasZero = false;
      }

      if (row + 1 === rows && arr[col] === 0) {
        res++;
      }
    }

    if (wasZero) {
      res++;
      wasZero = true;
    }
  }

  return res;
}

;(function() {
  let arr1 = [[1, 3, -5], [2, -4, 6]]
  let arr2 = [[-1, -3, 5], [-2, -4, -6]]

  // ​​​​​[ [ 0,  0, 0 ]
  //   [ 0, -8, 0 ] ]​​​​​
  console.log(countZeroRowsAndColumns(arr1, arr2), 3)

  // arr1 = [[1, 1], [1, 1]]
  // arr2 = [[-1, -1], [10, 9]]
  // console.log(countZeroRowsAndColumns(arr1, arr2), 1)

  // arr1 = [[1, 2, 3], [4, 5, 6]]
  // arr2 = [[-1, -2, -3], [-4, -5, -6]]

  // ​​​​​[ [ 0, 0, 0 ],
  //   [ 0, 0, 0 ] ]​​​​​
  // console.log(countZeroRowsAndColumns(arr1, arr2), 5)

  arr1 = [
    [52, -89, -35, -67],
    [-65, 85, 27, -44],
    [-11, -29, 37, -81],
    [-75, 73, 73, 44],
    [7, 45, -25, -26],
    [1, 22, 58, -14],
    [-2, 64, -79, -75],
    [71, -10, -94, 1],
    [93, -43, -74, 72],
    [-4, -39, -98, -82],
  ]
  arr2 = [
    [-52, 9, 84, 48],
    [65, -85, -27, 44],
    [11, 50, 84, 92],
    [75, 12, 39, 98],
    [-7, -45, 25, 26],
    [-1, 13, 84, 44],
    [2, -64, 79, 75],
    [-71, 39, 9, 3],
    [-93, 37, 59, 74],
    [4, 50, 70, 93],
  ]
  //  [[ 0, -80, 49, -19 ],​​​​​
  // ​​​​​  [ 0, 0, 0, 0 ],​​​​​
  // ​​​​​  [ 0, 21, 121, 11 ],​​​​​
  // ​​​​​  [ 0, 85, 112, 142 ],​​​​​
  // ​​​​​  [ 0, 0, 0, 0 ],​​​​​
  // ​​​​​  [ 0, 35, 142, 30 ],​​​​​
  // ​​​​​  [ 0, 0, 0, 0 ],​​​​​
  // ​​​​​  [ 0, 29, -85, 4 ],​​​​​
  // ​​​​​  [ 0, -6, -15, 146 ],​​​​​
  // ​​​​​  [ 0, 11, -28, 11 ] ]​​​​​
  console.time('mark')
  console.log(countZeroRowsAndColumns(arr1, arr2), 4)
  console.timeEnd('mark')
})()
