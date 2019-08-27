var beeramid = function pyramid(bonus, price, level = 1) {
  const nextBonus = bonus - level ** 2 * price

  if (nextBonus >= 0) {
    return pyramid(nextBonus, price, level + 1)
  }

  return level - 1
}

// 1 + (2 * 2) + (3 * 3) + (4 * 4)
// h level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

// console.log(beeramid(1500, 2), 12) // should === 12
// console.log(beeramid(5000, 3), 16) // should === 16

console.log(beeramid(9, 2), 1)
console.log(beeramid(10, 2), 2)
// console.log(beeramid(11, 2), 2);
// console.log(beeramid(21, 1.5), 3);
// console.log(beeramid(454, 5), 5);
// console.log(beeramid(455, 5), 6);
// console.log(beeramid(4, 4), 1);
// console.log(beeramid(3, 4), 0);
// console.log(beeramid(0, 4), 0);
// console.log(beeramid(-1, 4), 0);
