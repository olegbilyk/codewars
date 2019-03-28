/*
  Title:
    Create iterator

  Description:
    Need to create an iterator function

    It must return the object in which:

    Function "next"
    Number "index"
    Every function call "next" iterator`s state passes to the next step

    Call "next" return the object in which "value" and "done"

    Example

      const iterator = createIterator(['One', , 'Two']);

      iterator.next() // { value: 'One', done: false }
      iterator.index // 1

      // If array has holes, no need to miss
      iterator.next() // { value: undefined, done: false }
      iterator.index // 2

      iterator.next() // { value: 'Two', done: false }
      iterator.index // 3

      // If iterations is over
      iterator.next() // { value: undefined, done: true }
      iterator.index // 3

  Kata Link:
    https://www.codewars.com/kata/create-iterator/javascript

  Discuss Link:
    https://www.codewars.com/kata/create-iterator/discuss

  Solutions Link:
    https://www.codewars.com/kata/create-iterator/solutions

  Tags:
    #FUNDAMENTALS #ITERATORS #BASIC LANGUAGE
*/
/*
 * @param {array} array
 * @returns {object} in it the index and method next
 */
const createIterator = (array = []) => {
  let index = 0;

  return {
    next() {
      return {
        value: array[index],
        done: index >= array.length ? ((index = array.length), true) : (index++, false),
      };
    },
    get index() {
      return index;
    },
  };
};

const iterator = createIterator(['One', , 'Two']);

console.log(iterator.index, 0);
console.log(iterator.next(), { value: 'One', done: false });

console.log(iterator.index, 1);
console.log(iterator.next(), { value: undefined, done: false });

console.log(iterator.index, 2);
console.log(iterator.next(), { value: 'Two', done: false });

console.log(iterator.index, 3);
console.log(iterator.next(), { value: undefined, done: true });

console.log(iterator.index, 3);
