/*
  Title:
    Adding Big Numbers

  Description:
    We need to sum big numbers and we require your help.
    Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

    Example
    add("123", "321"); -> "444"
    add("11", "99"); -> "110"

    Notes
    The input numbers are big.
    The input is a string of only digits
    The numbers are positives

  Kata Link:
    https://www.codewars.com/kata/adding-big-numbers/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/adding-big-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/adding-big-numbers/solutions

  Tags:
    #ALGORITHMS #MATHEMATICS #NUMBERS #BIG INTEGERS #INTEGERS
*/

function strToArrNum(str) {
  return str
    .split('')
    .reverse()
    .map(Number);
}

function add(a, b) {
  const arrRes = [];
  const arrA = strToArrNum(a);
  const arrB = strToArrNum(b);
  let rank = 0;

  for (let i = 0, endI = Math.max(arrA.length, arrB.length); i < endI || rank; i++) {
    let sum = (arrA[i] || 0) + (arrB[i] || 0) + rank;
    arrRes.push(sum % 10);
    rank = parseInt(sum / 10);
  }

  return arrRes.reverse().join('');
}

console.log(
  'TEST',
  add('63829983432984289347293874', '90938498237058927340892374089') === '91002328220491911630239667963',
);
console.log(add('63829983432984289347293874', '90938498237058927340892374089'), '91002328220491911630239667963');

console.log(add('1', '1'), '2');
console.log(add('123', '456'), '579');
console.log(add('888', '222'), '1110');
console.log(add('1372', '69'), '1441');
console.log(add('12', '456'), '468');
console.log(add('101', '100'), '201');
