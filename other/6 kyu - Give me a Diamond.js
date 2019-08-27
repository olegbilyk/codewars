function diamond(n = 0) {
  if (n < 3 || !(n % 2)) return null;
  const symbol = "*";
  const diam = Array.from(Array(n - 1))
    .map((_, i) => i % 2 && i)
    .filter(Boolean)
    .reverse()
    .map((s, i) => " ".repeat(i + 1) + symbol.repeat(s));

  return `${[...diam].reverse().join("\n")}\n${symbol.repeat(n)}\n${diam.join(
    "\n"
  )}\n`;
}

// console.log(diamond(3), "\n------\n", " *\n***\n *\n");
console.log(
  diamond(9),
  "\n------\n",
  "   *\n" +
    "   ***\n" +
    "  *****\n" +
    " *******\n" +
    "*********\n" +
    " *******\n" +
    "  *****\n" +
    "   ***\n" +
    "    *"
);
// console.log(diamond(2), null)
// console.log(diamond(-3), null)
// console.log(diamond(0), null)
