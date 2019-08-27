function duplicateCount(text) {
  let res = 0

  Array.from(text).reduce((acc, curr) => {
    curr = curr.toLowerCase();
    const newValue = (acc[curr] || 0) + 1

    if (newValue === 2) {
      res += 1
    }

    return { ...acc, [curr]: newValue }
  }, {})

  return res
}

// console.log(duplicateCount(""), 0);
// console.log(duplicateCount("abcde"), 0);
// console.log(duplicateCount('aabbcde'), 2)
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
// console.log(duplicateCount("Indivisibility"), 1)
// console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
