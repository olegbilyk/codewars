function firstNonRepeatingLetter(s) {
  for (let l of s) {
    if (s.split('').filter(a => a.toUpperCase() === l.toUpperCase()).length === 1) {
      return l
    } 
  }

  return '';
}

console.log(firstNonRepeatingLetter('sTreSS'), 'T');
console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e')
