function dontGiveMeFive(start, end) {
  return Array.from({length: end - start + 1}, (_, i) => i + start).filter(i => !String(i).includes('5')).length;
}

function dontGiveMeFiveFor(start, end) {
    let counted = 0;

    for (let i = start; i <= end; i++) {
      if (String(i).includes('5')) continue;
      counted++
    }

    return counted
}

console.log('--- dontGiveMeFive ---');
console.log(dontGiveMeFive(1,9), 8, dontGiveMeFive(1,9) === 8);
console.log(dontGiveMeFive(4,17), 12, dontGiveMeFive(4,17) === 12); 

console.log('--- dontGiveMeFiveFor ---');
console.log(dontGiveMeFiveFor(1,9), 8, dontGiveMeFiveFor(1,9) === 8);
console.log(dontGiveMeFiveFor(4,17), 12, dontGiveMeFiveFor(4,17) === 12); 