function validParentheses(parens) {
  console.log(parens);
  if (parens.length % 2) return false;
  console.log(parens.match(new RegExp("\\(\\)")));
  // const arr = parens.split("").sort();

  // return arr[arr.length / 2] !== arr[arr.length / 2 + 1];
}

// console.log(validParentheses("()"), true);
// console.log(validParentheses("())"), false);
// console.log(validParentheses("(())"), true);

function solve(s) {
  // let arr = s.split(new RegExp("(\\(.+\\))")).map(m => {
  let arr = s.split(new RegExp("\\(.+?\\)")).map(m => {
    console.log(m);
    if (m.includes("(")) {
      // console.log(m.slice(1, -1));
      return solve(m);
    }

    return m;
    // .replace(new RegExp("-", "g"), "+")
    // .replace(new RegExp("\\+", "g"), "-");
  });

  // console.log(arr);

  return arr.join("");
  // .replace(new RegExp("^--", "g"), "")
  // .replace(new RegExp("--", "g"), "+");
}

// console.log(solve("a-(b)"),"a-b");
// console.log(solve("a-(-b)"), "a+b");
// console.log(solve("a+(b)"), "a+b");
// console.log(solve("a+(-b)"),"a-b");
// console.log(solve("(((((((((-((-(((n))))))))))))))"), "n");
// console.log(solve("(((a-((((-(-(f)))))))))"),"a-f");
// console.log(solve("((((-(-(-(-(m-g))))))))"),"m-g");
// console.log(solve("(((((((m-(-(((((t)))))))))))))"),"m+t");
// console.log(solve("-x"),"-x");
// console.log(solve("-(-(x))"),"x");
// console.log(solve("-((-x))"),"x");
// console.log(solve("-(-(-x))"), "-x");
// console.log(solve("-(-(x-y))"), "x-y");
// console.log(solve("-(x-y)"),"-x+y");
// console.log(solve("x-(y+z)"),"x-y-z");
// console.log(solve("x-(y-z)"),"x-y+z");
// console.log(solve("x-(-y-z)"),"x+y+z");
// console.log(solve("x-(-((-((((-((-(-(-y)))))))))))"),"x-y");
// console.log(solve("u-(v-w+(x+y))-z"),"u-v+w-x-y-z");
// console.log(solve("x-(s-(y-z))-(a+b)"),"x-s+y-z-a-b");
// console.log(solve("u+(g+v)+(r+t)"),"u+g+v+r+t");
// console.log(solve("q+(s-(x-o))-(t-(w-a))"),"q+s-x+o-t+w-a");
// console.log(solve("u-(v-w-(x+y))-z"),"u-v+w+x+y-z");
console.log(solve("v-(l+s)-(t+y)-(c+f)+(b-(n-p))"), "v-l-s-t-y-c-f+b-n+p");
