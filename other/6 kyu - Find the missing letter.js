function findMissingLetter(array) {
  for (let i = 0, endI = array.length; i < endI; i++) {
    const code = array[i].charCodeAt() + 1
    const nextCode = array[i + 1] && array[i + 1].charCodeAt()
  
    if (nextCode !== code) {
      return String.fromCharCode(code)
    }
  }
}

console.log(findMissingLetter(['a','b','c','d','f']), 'e');
console.log(findMissingLetter(['O','Q','R','S']), 'P');