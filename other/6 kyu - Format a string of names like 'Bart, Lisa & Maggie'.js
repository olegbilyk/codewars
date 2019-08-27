function list(names) {
  return names
    .map(({ name }) => name)
    .join(", ")
    // .replace(new RegExp("^.+,"), match => match.slice(0, -1) + " &");
    .replace(/(.*),(.*)$/, "$1 &$2")
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" }
  ]),
  "Bart, Lisa, Maggie, Homer & Marge"
);
// console.log(
//   list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
//   "Bart, Lisa & Maggie"
// );
// console.log(
//   list([{ name: "Bart" }, { name: "Lisa" }]),
//   "Bart & Lisa"
// );
// console.log(list([{ name: "Bart" }]), "Bart");
// console.log(list([]), "", "Must work with no names");
