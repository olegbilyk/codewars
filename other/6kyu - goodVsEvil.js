// function count(arr = [], worth = []) {
//   let res = 0

//   for (let i = 0, endI = arr.length; i < endI; i++) {
//     res += arr[i] * worth[i]
//   }

//   return res
// }

// function goodVsEvil(good = [], evil = []) {
//   const goodWorth = [1, 2, 3, 3, 4, 10]
//   const evilWorth = [1, 2, 2, 2, 3, 5, 10]
//   let goodResult = count(good.split(' '), goodWorth)
//   let evilResult = count(evil.split(' '), evilWorth)
//   let resultBattle = 'Battle Result: '

//   if (goodResult > evilResult) {
//     resultBattle += 'Good triumphs over Evil'
//   } else if (goodResult < evilResult) {
//     resultBattle += 'Evil eradicates all trace of Good'
//   } else {
//     resultBattle += 'No victor on this battle field'
//   }

//   return resultBattle
// }

function goodVsEvil(good, evil){
  let goodForces = good.split(" ");
  let evilForces = evil.split(" ");
  
  let goodArmy = new Map([
                          ["Hobbits", goodForces[0] * 1 ],
                          ["Men"    , goodForces[1] * 2 ],
                          ["Elves"  , goodForces[2] * 3 ],
                          ["Dwarves", goodForces[3] * 3 ],
                          ["Eagles" , goodForces[4] * 4 ],
                          ["Wizards", goodForces[5] * 10]
                        ]);    
  
  
  let evilArmy = new Map([
                          ["Orcs"    , evilForces[0] * 1 ],
                          ["Men"     , evilForces[1] * 2 ],
                          ["Wargs"   , evilForces[2] * 2 ],
                          ["Goblins" , evilForces[3] * 2 ],
                          ["Uruk Hai", evilForces[4] * 3 ],
                          ["Trolls"  , evilForces[5] * 5 ],
                          ["Wizards" , evilForces[6] * 10]
                        ]);
  
  let goodworth = 0;
  for(let value of goodArmy.values()) goodworth += value;
  
  let evilworth = 0;
  for(let value of evilArmy.values()) evilworth += value;
  
  if (goodworth == evilworth) return "Battle Result: No victor on this battle field";
  if (goodworth > evilworth)  return "Battle Result: Good triumphs over Evil";
  if (goodworth < evilworth)  return "Battle Result: Evil eradicates all trace of Good";
}

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Evil');
console.log(
  goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') === 'Battle Result: Evil eradicates all trace of Good',
  'Evil should win',
)
// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') === 'Battle Result: Good triumphs over Evil', 'Good should win')
// console.log(
//   goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') === 'Battle Result: No victor on this battle field',
//   'Should be a tie',
// )
