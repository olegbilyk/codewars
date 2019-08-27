// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

// function scramble(str1, str2) {
//   const arr1 = str1.split("");
//   let res = true;
//
//   // for (let i = 0, endI = arr1.length; i < endI; i++) {
//   //   for (let j = 0, endJ = arr2.length; j < endJ; j++) {
//   //     if (arr1[i] === arr2[j]) {
//   //       arr2.splice(j, 1);
//   //       break;
//   //     }
//   //   }
//   // }
//
//   for (let j = 0, endJ = str2.length; j < endJ; j++) {
//     if (arr1.indexOf(str2[j]) !== -1) {
//       arr1.splice(arr1.indexOf(str2[j]), 1);
//     } else {
//       res = false;
//       break;
//     }
//   }
//   //
//   // console.log(arr1);
//
//   return res;
// }

function scramble(str1, str2) {
  const array1 = str1.split('').sort()
  const array2 = str2.split('').sort()
  let i = 0
  let x


  for (let x = 0, i = 0; i < array2.length && x <= array1.length; x++) {
    if (array2[i] === array1[x]) i++
  }

  return x <= array1.length
}

// console.log(scramble("rkqodlw", "world"), true);
// console.log(scramble("katas", "steak"), false);
// console.log(scramble("scriptjavx", "javascript"), false);
console.log(scramble("javscripts", "javascript"), false);
