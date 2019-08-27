const digital_root = function rec(n) {
  // while(n > 10) {
  //   n = [...`${n}`].reduce((acc, curr) => acc + parseInt(curr), 0)
  // }

  // return n
  // return n < 10 ? n : rec([...`${n}`].reduce((acc, curr) => acc + parseInt(curr), 0));

  // Magic
  return (n - 1) % 9 + 1;
}

console.log( digital_root(16), 7 )
console.log( digital_root(99999999), 6 )