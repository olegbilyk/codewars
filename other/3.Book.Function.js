function min(number1, number2) {
  return number1 < number2 ? number1 : number2
}

console.log(min(0, 10), 0, 'test =>', min(0, 10) === 0);
console.log(min(0, -10), -10, 'test =>', min(0, -10) === -10);

function isEven(number) {
  if (number === 0) return true;
  if (number === 1) return false;
  if (number < 0) return isEven(-number);

  return isEven(number - 2);
}

console.log(isEven(50), true, 'test =>', isEven(50) === true);
console.log(isEven(75), false, 'test =>', isEven(75) === false);
console.log(isEven(-1), '??', false, 'test =>', isEven(-1) === false );

function countChar(str, char) {
  let counted = 0;

  for (let i = 0, endI = str.length; i < endI; i++) {
    if (str.charAt(i) === char) counted++
  }

  return counted
}

function countBs(str) {
  return countChar(str, 'B')
}

console.log(countBs("BBC"), 2, 'test =>', countBs("BBC") === 2);
console.log(countChar("kakkerlak", "k"), 4, 'test =>', countChar("kakkerlak", "k") === 4);