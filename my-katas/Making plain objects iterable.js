/*
  Title:
    Making plain objects iterable

  Description:
    # Task
    ### Making plain objects iterable

    Most `Object` ( excluding `Array` and the like here ) are not iterable ( using `for .. of` ).
    We can rectify this for our purposes by extending the `Object` prototype with a custom iterator.

    Our iterator should produce successive ( in insertion order ) values of `[ key, value ]`.

    ## Example
    ```
      const player = {
        name: "Cristiano Ronaldo",
        position: "forward",
        birthDate: "1985-02-05"
      }

      for (let stat of player) {
        console.log(stat)
      }
    ```
    ### Result consoles:
    ```
    [ 'name', 'Cristiano Ronaldo' ]
    [ 'position', 'forward' ]
    [ 'birthDate', '1985-02-05' ]
    ```

  Kata Link:
    https://www.codewars.com/kata/making-plain-objects-iterable

  Discuss Link:
    https://www.codewars.com/kata/making-plain-objects-iterable/discuss

  Solutions Link:
    https://www.codewars.com/kata/making-plain-objects-iterable/solutions

  Tags:
    #FUNDAMENTALS, #BASIC LANGUAGE FEATURES, #ARRAYS, #DATA TYPES, #OBJECTS
*/
Object.prototype[Symbol.iterator] = function*() {
  yield* Object.entries(this);
};

const player = {
  name: 'Cristiano Ronaldo',
  position: 'forward',
  birthDate: '1985-02-05',
};

const playerArray = [];
const playerArrayEntries = Object.entries(player);

for (let stat of player) {
  playerArray.push(stat);
}

console.log(playerArray);
console.log('START TESTS');
playerArray.forEach(([key, value], i) => {
  console.log(key === playerArrayEntries[i][0], 'Key', key);
  console.log(value === playerArrayEntries[i][1], 'Value', value);
});
console.log('END TESTS');
