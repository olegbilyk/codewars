function hexToRgba(hex = "", a = 1) {
  hex = hex.replace(new RegExp("#", "g"), "");

  if (hex.length < 4) {
    hex = hex.replace(new RegExp(".", "g"), m => m.repeat(2));
  }

  const [r = 0, g = 0, b = 0] = hex
    .split(new RegExp("(..)", "g"))
    .filter(Boolean)
    .map(c => parseInt(c, 16));

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

console.log(hexToRgba("fff"), "rgba(250, 183, 129, 1)", "fff");
// console.log(hexToRgba("fab781"), "rgba(250, 183, 129, 1)", "1");
// console.log(hexToRgba("fab781", 0.5), "rgba(250, 183, 129, 0.5)", "");
// console.log(hexToRgba("#fab781", 0.5), "rgba(250, 183, 129, 0.5)", "#");
