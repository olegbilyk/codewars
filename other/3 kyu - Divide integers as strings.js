function strToArrNum(str) {
  return str
    .split("")
    .reverse()
    .map(Number);
}

// function divideStrings(number, divisor) {
//   if (number === 0 || divisor === 0) return ["0", "0"];
//   let resStr = "";
//
//   // let strSize = number.toString().length;
//
//   let quotient;
//   let remainder;
//   const arrA = strToArrNum(number.toString());
//   const arrB = strToArrNum(divisor.toString());
//
//   // console.log(
//   //   Math.floor(+arrA.slice(0, 5).join("") / +arrB.slice(0, 5).join("")),
//   //   Math.floor(+arrA.slice(5, 10).join("") / +arrB.slice(5, 10).join(""))
//   // );
//
//   // for (let i = 0; i < strSize; i++) {
//   //   if (i % strSize == 0) {
//   //     console.log(i % strSize)
//   //   }
//   // }
//
//   // console.log(arrA);
//   // console.log(arrB);
//
//   return [
//     Math.floor(+number / +divisor).toString(),
//     (+number % +divisor).toString()
//   ]; // This doesn't work on big numbers!
// }

function divideStrings(number, divisor) {
  if (number === 0 || divisor === 0) return ["0", "0"];
  number = number.toString();
  divisor = divisor.toString();

  let resStr = "";
  let idx = 0;
  let temp = number[idx] - "0";

  while (temp < divisor) temp = temp * 10 + (number[++idx] - "0");

  while (number.length > idx) {
    resStr = temp / divisor + "0";
    temp = (temp % divisor) * 10 + number[++idx] - "0";
  }

  if (resStr.length == 0) return "0";

  return resStr;
}

// console.log(divideStrings(219219, 11), ["19929", "10"]);
// 1.9090909091 / 21 0000 = 19090.909091
// 8.3636363636 / 92 00 = 836.36363636
// 1.7272727273 / 19 = 1.7272727273
// done

// console.log(divideStrings(219219, 1122), ["195", "3823529412"]);
//11 1.9090909091 / 21 0000 = 19090.909091
//11 8.3636363636 / 92 00 = 836.36363636
//11 1.7272727273 / 19 = 1.7272727273
// 19929

//22 0.9545454545 / 21 0000 = 9545.454545
//22 4.1818181818 / 92 00 = 418.18181818
//22 0.8636363636 / 19 = 0.8636363636
// 9964.50
// error


// console.log(divideStrings(219, 11), ["19", "10"]);
// console.log(divideStrings(219219, 11), ["19929", "10"]);
// console.log(divideStrings(219219219219, 11), ["19929019929", "10"]);
// console.log(divideStrings(1000, 10), ["100", "10"]);
// console.log(divideStrings(1469077180000, 3255400), ["451273", "3055800"]);
// console.log(divideStrings(325540000000, 3255400), ["100000", "0"]);

// console.log(
//   divideStrings(
//     8397894964467414366746722505490823411825030552813692694366736200189155863582109544684996285000,
//     11778229407449821231696493927642421490373243486396577983957799026742656595643
//   ),
//   [
//     "713001477043372989",
//     "10632365505025907278870165122496980888429342761916635418333738829620394998073"
//   ]
// );
