function encode(message, key, initShift) {
  return message
}

function decode(message, key, initShift) {
  return message
}

console.log(encode('on', 'cryptogam', 10), 'jx')
console.log(decode('jx', 'cryptogam', 10), 'on')
console.log(decode('...,', 'cryptogam', 10), '...,')
console.log(encode('cryptogram', 'cryptogam', 0), 'cytgmdfmbk')
console.log(decode('abc', 'keykeykeykey', 10), 'sit')
console.log(encode('on the first day i got lost.', 'cryptogam', 10), 'jx wnz xrkvz jnd l ufd vwcz.')
console.log(decode('jx wnz xrkvz jnd l ufd vwcz.', 'cryptogam', 10), 'on the first day i got lost.')
console.log(encode('i will never eat any grapes again', 'superkey', 4), 'n ggka cvssb bfe esz omgdyr bqqva')
console.log(decode('n ggka cvssb bfe esz omgdyr bqqva', 'superkey', 30), 'i will never eat any grapes again')
console.log(decode('qvf cmnxmdkjfca.p,ab mf,byokf vjhwpcyb', 'nqhbfgmi', 28), 'zva nguhbmmgydx.s,ok se,rmafz vpedgbua')
