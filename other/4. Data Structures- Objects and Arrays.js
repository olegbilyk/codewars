// 4. Data Structures: Objects and Arrays

// 4.1 The sum of a range
function range(start = 0, end = 0, step = start < end ? 1 : -1) {
  const arr = [];

  for (; start !== end + step; start += step) {
    arr.push(start);
  }

  return arr;
}

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}

// console.log(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(range(5, 2, -1), [5, 4, 3, 2]);
// console.log(sum(range(1, 10)), 55);

// 4.2 Reversing an array
function reverseArray(arr) {
  let output = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }

  return output;
}

function reverseArrayInPlace(arr) {
  return arr.splice(0, arr.length, ...reverseArray(arr));
}

// console.log(reverseArray(['A', 'B', 'C']), ['C', 'B', 'A']);

// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue, [5, 4, 3, 2, 1]);

// 4.3 A list
const arrayToList = function toMap(arr, obj = {}) {
  if (!arr.length) return null;

  obj = {
    value: arr[0],
    rest: toMap(arr.slice(1)),
  };

  return obj;
};

const listToArray = function toArray(list = {}, arr = []) {
  arr.push(list.value);
  if (list.rest === null) return arr;

  return listToArray(list.rest, arr);
};

const prepend = function addToMap(value, rest = null) {
  return { value, rest };
};

const nth = function nthFind(list = {}, index = 0) {
  if (!list) return undefined;
  if (index === 0) return list.value;

  return nthFind(list.rest, --index);
};

// Book
// function arrayToList(array) {
//   let list = null
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], rest: list }
//   }
//   return list
// }

// function listToArray(list) {
//   let array = []
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value)
//   }
//   return array
// }

// function prepend(value, list) {
//   return { value, rest: list }
// }

// function nth(list, n) {
//   if (!list) return undefined
//   else if (n == 0) return list.value
//   else return nth(list.rest, n - 1)
// }

// console.log(arrayToList([10, 20]), { value: 10, rest: { value: 20, rest: null } })
// console.log(listToArray(arrayToList([10, 20, 30])), [10, 20, 30])
// console.log(prepend(20, null), {value: 20, rest: null});
// console.log(prepend(10, prepend(20, null)), {value: 10, rest: {value: 20, rest: null}});
// console.log(nth(arrayToList([10, 20, 30]), 1), 20);

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

// 4.4 Deep comparison
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  let res = false;

  if (isObject(obj1) && isObject(obj2)) {
    for (let key in obj1) {
      if (isObject(obj1[key]) && isObject(obj2[key])) {
        res = deepEqual(obj1[key], obj2[key]);
        continue;
      } else if (obj1[key] === obj2[key]) {
        res = true;
        continue;
      }

      break;
    }
  }

  return res;
}

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj), true);
// console.log(deepEqual(obj, { here: 1, object: 2 }), false);
// console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }), true);
