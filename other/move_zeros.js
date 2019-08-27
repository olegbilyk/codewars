function move_zeros(arrNum = [], isRight = true) {
  arrNum = arrNum.sort()

  if (isRight) {
    arrNum = arrNum.sort().reverse()
  }

  return isRight ? arrNum.sort().reverse() : arrNum.sort()
}


console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true), [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false), [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]);
console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]), [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);