/*
  Title:
    Next bigger number with the same digits

  Description:
    You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

    ```js
    12 ==> 21
    513 ==> 531
    2017 ==> 2071
    ```

    If no bigger number can be composed using those digits, return `-1`:

    ```js
    9 ==> -1
    111 ==> -1
    531 ==> -1
    ```

  Kata Link:
    https://www.codewars.com/kata/next-bigger-number-with-the-same-digits

  Discuss Link:
    https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/discuss

  Solutions Link:
    https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/solutions

  Tags:
    #REFACTORING, #NUMBERS, #DATA TYPES, #STRINGS, #INTEGERS
*/

function nextBigger(n) {
  const arr = n.toString().split('');
  let right = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      right = arr.splice(i);
      break;
    }
  }

  if (!right) {
    return -1;
  }

  const lastArrIndex = arr.length - 1;
  const swapRightIndex = right.indexOf(right.sort().reduce((acc, curr) => (acc <= arr[lastArrIndex] ? curr : acc), 0));

  [arr[lastArrIndex], right[swapRightIndex]] = [right[swapRightIndex], arr[lastArrIndex]];

  return parseInt([...arr, ...right.sort()].join(''), 10);
}

// console.log(nextBigger(34722641), 34724126);
// console.log(nextBigger(31621800), 31628001);
console.log(nextBigger(48459853), 48483559);
// console.log(nextBigger(18), 81);
// console.log(nextBigger(2273014), 2273041);
// console.log(nextBigger(5556806940000), 5556809000046);

// console.log(nextBigger(12), 21);
// console.log(nextBigger(513), 531);
// console.log(nextBigger(2017), 2071);
// console.log(nextBigger(414), 441);
// console.log(nextBigger(144), 414);
