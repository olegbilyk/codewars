function encrypt(text, n = 0) {
  if (n <= 0 || typeof text !== typeof " ") return text;

  while (n--) {
    text = text
      .split("")
      .reduce(
        ([left, right], curr, index) => {
          return index % 2 ? [left + curr, right] : [left, right + curr];
        },
        ["", ""]
      )
      .join("");
  }

  return text;
}

function decrypt(encryptedText, n) {
  if (n <= 0 || typeof encryptedText !== typeof " ") return encryptedText;

  while (n--) {
    const right = encryptedText.split("");
    const left = right.splice(0, Math.floor(right.length / 2));

    encryptedText = "";

    for (let i = 0, endI = Math.max(left.length, right.length); i < endI; i++) {
      encryptedText += right[i] || "";
      encryptedText += left[i] || "";
    }
  }

  return encryptedText;
}

// console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
// console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
// console.log(encrypt("This is a test!", 3), " Tah itse sits!");
// console.log(encrypt("This is a test!", 4), "This is a test!");
// console.log(
//   encrypt("This kata is very interesting!", 1),
//   "hskt svr neetn!Ti aai eyitrsig"
// );

// console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
// console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
// console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
// console.log(decrypt("This is a test!", 4), "This is a test!");
// console.log(
//   decrypt("hskt svr neetn!Ti aai eyitrsig", 1),
//   "This kata is very interesting!"
// );
