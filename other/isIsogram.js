function isIsogram(str) {
  let res = true
  
  Array.from(str, l => l.toLowerCase()).sort().forEach((l, i, arr) => {
    if (l === arr[i + 1]) {
      res = false;
    }
  })

  return res;


  // return new Set(str.toUpperCase()).size == str.length;
}

console.log( isIsogram("isogram"), true );
console.log( isIsogram("aba"), false, "same chars may not be adjacent" );