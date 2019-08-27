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

  return hex;
}

function getRandomInt() {
  return Math.round(Math.random() * (256 - 0)) + 0;
}

var generateColor = function() {
  return `#${(0 | Math.random() * 0xEEEEEE + 0x111111).toString(16)}`
};

console.log(generateColor());
// https://www.webpagefx.com/web-design/hex-to-rgb/ check valid color