// removeZeros=a=>a.slice(a.f=a.findIndex(b=> b), -[...a].reverse().f || a.length)

removeZeros=a=> {
  // console.log(!a[0]|!a[a.length-1]);
  // for (;(!a[0]&&a.shift())||(!a[a.length-1]&&--a.length);) {
  //   // !a[0] && a.shift();
  //   // !a[a.length - 1] && a.pop();
  // }
  // console.log((!a[0]&&a.shift())||(!a[a.length-1]&&a.pop()));
  // console.log(a.length);
  // console.log(!a[a.length - 1]||!a[0]);

  // console.log(a.f=a.findIndex(b=> b), -[...a].reverse().f)
  // console.log([...a].f);
  // return a.slice(a.findIndex(b=> b), -[...a].reverse().findIndex(b=> b) || a.length);
  // !(a.i=a.indexOf(0)) && a.splice(a.i, 1)
  // !(a.d=a.lastIndexOf(0)) && a.splice(a.d, 1)
  // console.log((a+''));
  // console.log((a+'').replace(/|,|^0*|0*$/g, ''));
  // console.log(a.join('').search(/0*$/g, ""));

  // console.log([...(a+'').replace(/^0*-0*$/g, '')]);
  // console.log(a.join('').replace(/^0*|0*$/g, ''));
  // console.log(','+a);
  // console.log((a+',').replace(/^\,0*|(,0)*$/g,'').split(','));
  // console.log((a+'').replace(/^(0.)*/g,''));
  // console.log((a+'').replace(/,/g,''));

  // console.log([...a.join('').replace(/^0*|0*$/g, '')]);
  console.log([...a.map(n=>n||" ").join``.trim()].map(n=>+n));
  // console.log(a.join(''));
  // console.log(a.join``);
  // console.log(a.join('').search(/^0*|0*$/ig, ''));
  // console.log(a.join('').search(/^[1-9]/ig));
  return a
}
// console.log("<PASSED::>"); return;
// for ()
// console.log(removeZeros([0,0,0,0,0,1,7,2,4,3,0,0,8,9,9,8,5,9,5,9,0]), [1, 7, 2, 4, 3, 0, 0, 8, 9, 9, 8, 5, 9, 5, 9])

console.log(removeZeros([0, 0, 9, 0, 4, 0, 0, 0 ]), [9, 0, 4])
// console.log(removeZeros([0, 9, 0, 4]), [9, 0, 4])
// console.log(removeZeros.toString().length)
// console.log(removeZeros([0, 0, 9, 5, 0, 0, 0, 0, 2, 0, 0]),[9, 5, 0, 0, 0, 0, 2])
// console.log(removeZeros([1, 6, 0, 2]),[1, 6, 0, 2])
// console.log(removeZeros([1, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),[1, 0, 2, 3])
