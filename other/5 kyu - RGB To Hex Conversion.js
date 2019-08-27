function rgb(r, g, b) {
  let hex = '';

  for (let col of [r, g, b]) {
    if (col <= 0) {
      hex += '00';
    } else if (col >= 255) {
      hex += 'ff';
    } else if (col >= 0 && col < 9) {
      hex += '0' + col.toString(16);
    } else {
      hex += col.toString(16);
    }
  }

  return hex.toUpperCase();
}

// function rgb(r, g, b){
//   return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }


// console.log(rgb(5, 11, 0), '050B00');
// console.log(rgb(0, 0, -20), '000000');
// console.log(rgb(300, 255, 255), 'FFFFFF');
// console.log(rgb(173,255,47), 'ADFF2F');

// console.log(rgb(255, 255, 255), 'FFFFFF')
// console.log(rgb(255, 255, 300), 'FFFFFF')
// console.log(rgb(0,0,0), '000000')
// console.log(rgb(148, 0, 211), '9400D3')
